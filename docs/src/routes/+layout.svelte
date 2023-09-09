<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blog Copy</title>
  </head>
  <body>
    <div class="main">
      <div class="nav-column">
        <MainNav />
      </div>
      <div class="content-column">
        <slot></slot>
      </div>
    </div>
    <div class="footer">
      &copy; Jon Richards, All rights reserved.
    </div>
  </body>
</html>

<style lang="scss">
  @use '$lib/utils/breakpoints' as *;
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  :root {
    --docs__footer-height: 10rem;

    @include breakpoint('768') {
      --docs__footer-height: 5rem;
    }

    @include colors.set-color-properties;

    background-color: colors.get-color('shadow--dim');
    color: colors.get-color('light--bright');
  }

  .main {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--docs__footer-height));
    width: 100%;

    @include breakpoint('768') {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .nav-column {
    background-color: colors.get-color('shadow--mid');
    display: none;

    @include breakpoint('768') {
      display: block;
      flex-basis: 15rem;
      flex-grow: 0;
    }
  }

  .content-column {
    flex-grow: 1;
  }

  .footer {
    align-items: center;
    background-color: colors.get-color('shadow--mid');
    display: flex;
    height: var(--docs__footer-height);
    justify-content: center;
    padding: 0 2rem;
  }
</style>

<script lang="ts">
  import MainNav from '$lib/main_nav';
</script>
