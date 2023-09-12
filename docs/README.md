# Blog Copy Docs


## Overview

At the time of this writing, the docs are a lightly configured Sveltkit
application, which exists as a child project of Blog Copy.  For more
comprehensive documentation than what's covered here, see the
[official Sveltkit docs](https://kit.svelte.dev/docs/introduction).

---

## Running The Project

### Requirements

- Node.js >= 16.20.0
- NPM >= 8.19.4

### Installation

```bash
$ npm install
```

### Building The Docs

The docs are generated as a static site, which can be found at
`./build/index.html`.

Two builds should be one, the first from the main project, which will place an
updated copy of the library in the docs' `/static` directory, the second from
the docs project, which will build the views, etc. needed to browse the docs
application.

From the root Blog Copy project:
```bash
$ npm run build
```

From the Docs Project:
```bash
$ npm run build
```

This will also perform a type check and other audits as the app is configured
with TypeScript support.

### Running The Docs Locally

```bash
$ npm run dev -- --host
```

> The `--hosts` option may be required if running the project from a VM, as this
> exposes the server to the VM's network.  (Provided the VM is also set up to
> do so.)

### Running Type Checks And Other Audits

It's recommended to have this process running along side the dev command as its
command line feedback is easier to read.

```
$ npm run check:watch
```

---

## Configuration

The project's name, routes, and other fields can be configured via the
`docs.config.ts` file at the project root.

### Sections

Sections can be nested.  At the time of this writing, the app will parse nested
sections three levels deep.  The top level is used for defining major sections
within the navigation, and for building routes on which the subsections will
be appended.

The first layer of subsections are used for generating links, these lead to
corresponding documentation pages (which need to be added to `lib/routes`
manually.

The second layer of subsections are used for generating an "On this page" index
for each documentation page, these are primarily used for accessibility.

> Note that slugs are always prepended with `/` or `#`, this is because some
> slugs are used to route to a new page, while others can be used to route to
> an ID on the current page.

```typescript
const CONFIG = {
  // ...
  'sections': [
    // Appears as a top level navigation category
    {
      'title': Getting Started,
      'slug': '/getting-started',
      'subsections': [
        // Appears as a link within that category.
        // Leads to /getting-started/installation
        {
          'title': 'Installation'.
          'slug': '/installation',
          'subsections': [
            // Appears as a link in the page's "On This Page" section.
            // Leads to /getting-started/installation/#requirements
            {
              'title': 'Requirements',
              'slug': '#requirements'
          ]
        }
      ]
    }
  ]
}

export default CONFIG;
```

Once a section route is configured, its view should be placed in:
```
./src/routes/getting-started/installation/+page.svelte
```

See SvelteKit's official docs for further reading on writing views.

---

## Tips and Tricks

- Placing a `.ts` next to a `.svelte` file will include the output of the `.ts`
  file when the `.svelte` file is compiled.

- Even though the app is built as a static site, any JavaScript written into
  a given view will also execute at runtime, due to how SvelteKit hydrates the
  static app with the SPA.
