#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sass = require('sass');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const esbuild = require('esbuild');

if (!argv.name) process.exit(1);

const name = argv.name;
const CHECKMARK = '\u2713';

const sourceSASS = path.resolve(__dirname, '..', 'src', 'scss', `${name}.scss`);
const renderedSASS = sass.compile(sourceSASS);

/**
 * @param {string} outfile
 * @param {() => void} callback
 */
function writeCSS(outfile, callback) {
  fs.writeFile(
    outfile,
    renderedSASS.css,
    {},
    callback
  );
}

writeCSS(
  path.resolve(__dirname, '..', 'dist', `${name}.css`),
  () => console.log(`${CHECKMARK} SASS: Build complete.`)
);

writeCSS(
  path.resolve(__dirname, '..', 'docs', 'static', `${name}.css`),
  () => console.log(`${CHECKMARK} SASS: Docs updated.`)
);

/**
 * @param {string} outfile
 */
async function buildTS(outfile) {
  if (typeof outfile !== 'string' && outfile.length < 1) {
    throw RangeError('Invalid outfile.');
  }

  await esbuild.build({
    entryPoints: [
      path.resolve(__dirname, '..', 'src', 'ts', `${name}.ts`)
    ],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile
  });
}

buildTS(path.resolve(__dirname, '..', 'dist', `${name}.js`))
  .then(() => console.log(`${CHECKMARK} TS: Build complete.`))
  .catch(err => console.error(err));

buildTS(path.resolve(__dirname, '..', 'docs', 'static', `${name}.js`))
  .then(() => console.log(`${CHECKMARK} TS: Docs updated.`))
  .catch(err => console.error(err));
