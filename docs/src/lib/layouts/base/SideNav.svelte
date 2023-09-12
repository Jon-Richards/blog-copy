<nav>
  <ul class="index">
    {#each sections as section}
      {#if section.subsections}
        <li>
          <IndexList
            title={section.title}
            slug={section.slug}
            items={section.subsections}
          />
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style lang="scss">
  @use '$lib/utils/breakpoints';
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  nav {
    padding: dimensions.get('base');

    $_offset: calc(#{dimensions.get('base')} * 2);

    @include breakpoints.get('2048', $_offset) {
      padding-left: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 0 dimensions.get('base') 0;
    padding: 0;

    @include breakpoints.get('768') {
      flex-direction: row;
    }

    @include breakpoints.get('1280') {
      flex-direction: column;
    }
  }

  .index > li {
    margin: 0 dimensions.get('grande') dimensions.get('grande') 0;

    @include breakpoints.get('1280') {
      &:last-of-type {
        margin: 0;
      }
    }
  }
</style>

<script lang="ts">
  import IndexList from '$lib/index_list';
  import CONFIG from '$config';

  const sections = CONFIG.sections;
</script>
