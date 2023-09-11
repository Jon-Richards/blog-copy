<div class="content-block">
  <slot></slot>
</div>

<style lang="scss">
  @use '$lib/utils/breakpoints';

  .content-block {
    height: 100%;
    margin: 0 auto;
    max-width: breakpoints.value('2048');
    width: 100%;
  }
</style>
