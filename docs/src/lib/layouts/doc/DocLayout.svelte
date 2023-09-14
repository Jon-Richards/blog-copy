<div class="content">
  <div class="on-this-page">
    On this page
  </div>

  <div class="content-safe">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  @use '$lib/utils/breakpoints';
  @use '$lib/utils/constants';
  @use '$lib/utils/colors';

  .content {
    background-color: #003;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @include breakpoints.get('1024') {
      flex-direction: row;
    }
  }

  .on-this-page {
    @include breakpoints.get('1024') {
      background-color: #005;
      flex-basis: constants.$SIDE_BAR_WIDTH;
      order: 2;
    }
  }

  .content-safe {
    @include breakpoints.get('1024') {
      $_gutter: 28rem;
      order: 1;
      flex-grow: 1;
      // max-width: calc(100% - $_gutter);
    }
  }
</style>
