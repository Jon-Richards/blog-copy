<Header pageTitle={data.title} />
<div class="body">
  <div class="gutter"></div>
  <main>
    <div id="index" class="index">
      <SideNav />
    </div>
    <div id="content" class="content">
      <slot></slot>
    </div>
  </main>
  <div class="gutter gutter--transparent"></div>
</div>
<Footer copyright={data.copyright} />

<svelte:head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{data.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,700;1,8..60,400;1,8..60,500;1,8..60,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="blog-copy.css" />
  <script src="/client/client.js"></script>
</svelte:head>

<style lang="scss">
  @use '$lib/utils/breakpoints';
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';
  @use '$lib/utils/fonts';
  @use '$lib/utils/a11y';

  :global(*) {
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: border-box;
    }
  }

  :global(html) {
    --docs__header-height: 5rem;
    --docs__footer-height: 10rem;

    @include breakpoints.get('768') {
      --docs__footer-height: 5rem;
    }

    @include colors.set-color-properties;
    @include fonts.set-fonts;

    background-color: colors.get('shadow--dim');
    color: colors.get('light--bright');
    font-size: 100%;
    margin: 0;
    padding: 0;

    :global(body) {
      margin: 0;
      padding: 0;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
  }

  main {
    background-color: colors.get('shadow--mid');
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: breakpoints.value('2048');
    min-height: calc(100vh - var(--docs__footer-height));
    padding-top: var(--docs__header-height);

    @include breakpoints.get('1280') {
      flex-direction: row;
      margin: 0 auto;
    }
  }

  .gutter {
    background-color: colors.get('shadow--mid');
    display: none;
    flex-grow: 1;

    @include breakpoints.get('1280') {
      display: block;
    }

    &--transparent {
      background: none;
    }
  }

  .index {
    order: 2;

    @include breakpoints.get('1280') {
      flex-basis: 14rem;
      height: 100%;
      order: 1;
      overflow-y: scroll;
    }
  }

  .content {
    background-color: colors.get('shadow--dim');
    flex-grow: 1;
    order: 1;

    @include breakpoints.get('1280') {
      order: 2;
    }
  }
</style>

<script lang="ts">
  import Header from '$lib/layouts/base/Header.svelte';
  import Footer from '$lib/layouts/base/Footer.svelte';
  import SideNav from '$lib/layouts/base/SideNav.svelte';
  export let data;
</script>
