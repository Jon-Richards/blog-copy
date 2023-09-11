<div>{title}</div>
<ul>
  {#each links as link}
    <li>
      <Link href={link.slug}>{@html link.title}</Link>
    </li>
  {/each}
</ul>

<style lang="scss">
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  div {
    font-weight: 700;
    margin-bottom: dimensions.get('petite');
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: dimensions.get('base');
  }

  ul > li {
    margin-bottom: calc(dimensions.get('petite') / 2);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
</style>

<script lang="ts">
  import Link from './Link.svelte';

  export let title: string;
  export let slug: string;

  interface ILink {
    title: string;
    slug: string;
  }

  export let items: ILink[];

  const links = items.map(item => (
    { title: item.title, slug: buildLinkRoute(item) }
  ));

  function buildLinkRoute(link: ILink): string {
    return `${slug}${link.slug}`;
  }
</script>
