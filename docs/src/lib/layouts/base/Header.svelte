<header>
  <ContentBlock>
    <div class="header-content">
      <div class="title">
        {pageTitle}
      </div>
      <div class="menu-link">
        <IndexButton id="menu-btn" on:click={scrollToIndex}>
          <span class="icon material-symbols-outlined">menu</span>
        </IndexButton>
      </div>
    </div>
  </ContentBlock>
</header>

<script lang="ts">
  import ContentBlock from '$lib/components/ContentBlock.svelte';
  import IndexButton from './IndexButton.svelte';

  export let pageTitle: string;

  function scrollToIndex() {
    const nav = document.querySelector('nav');
    if (nav) {
      const rect = nav.getBoundingClientRect();
      const navY = window.scrollY + rect.y;
      window.scrollTo({top: navY, left: window.scrollX, behavior: 'smooth'});
    }
  }
</script>

<style lang="scss">
  @use '$lib/utils/breakpoints';
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  header {
    background-color: colors.get('shadow--mid');
    height: var(--docs__header-height);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .header-content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: dimensions.get('base');

    /*
     * Offset the next breakpoint so that the padding doesn't negate until the
     * content would no longer appear flush with the edge of it allotted space.
     */
    $_horizontal-padding: (dimensions.get('base') * 2);

    @include breakpoints.get('2048', $_horizontal-padding) {
      padding: dimensions.get('base') 0;
    }
  }

  .title {
    align-items: center;
    display: flex;
    font-size: 2rem;
    font-weight: 100;
    height: 100%;
    margin-top: -0.5rem;
  }

  .menu-link {
    @include breakpoints.get('1280') {
      display: none;
    }
  }

  .icon {
    font-size: 2.5rem;
  }
</style>
