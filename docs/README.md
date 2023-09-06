# Blog Copy Docs

## Overview

At the time of this writing, the docs are a lightly configured Sveltkit
application.  For more comprehensive documentation than what's covered here,
see the [official Sveltkit docs](https://kit.svelte.dev/docs/introduction).

## Running The Project

### Installation

```bash
$ npm install
```

### Building The Docs

The docs are generated as a static site, which can be found at
`./build/index.html`.

```bash
$ npm run build
```

This will also perform a type check and other audits as the app is configured
with TypeScript support.

### Running The Docs Locally

```bash
$ npm run dev -- --host
```

### Running Type Checks And Other Audits

It's recommended to have this process running along side the dev command as its
command line feedback is easier to read.

```
$ npm run check:watch
```

### Good To Knows

- Placing a `.ts` next to a `.svelte` file will include the output of the `.ts`
  file when the `.svelte` file is compiled.
