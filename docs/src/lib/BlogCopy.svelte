<div class="bc__root">
  <slot></slot>
</div>

<style lang="scss">
  @use '../../../src/scss/blog-copy';

  @include blog-copy.render();
</style>
