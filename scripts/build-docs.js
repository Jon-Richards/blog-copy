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
const sourceHTML = path.resolve(__dirname, '..', 'src', `${name}.html`);
const distHTML = path.resolve(__dirname, '..', 'dist', `${name}.html`);
const CHECKMARK = '\u2713';

/*
fs.copyFile(sourceHTML, distHTML, () => console.log(
    `${CHECKMARK} HTML build complete.`));
*/

const sourceSASS = path.resolve(
    __dirname, '..', 'doc', 'src', 'scss', `${name}.scss`);
const renderedSASS = sass.compile(sourceSASS);

fs.writeFile(
  path.resolve(__dirname, '..', 'public', `${name}.css`),
  renderedSASS.css,
  {},
  () => console.log(`${CHECKMARK} SASS build complete.`)
);

async function buildTS() {
  await esbuild.build({
    entryPoints: [
      path.resolve(__dirname, '..', 'doc', 'src', 'ts', `${name}.ts`)
    ],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: path.resolve(__dirname, '..', 'doc', 'public', `${name}.js`)
  });
}

buildTS()
    .then(() => console.log(`${CHECKMARK} TS build complete.`))
    .catch(err => console.error(err));
