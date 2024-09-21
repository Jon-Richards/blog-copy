<div>{title}</div>
<ul>
  {#each items as item}
    <li>
      <Link href={item.slug}>{@html item.title}</Link>
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
    font-weight: 400;
    margin-bottom: calc(dimensions.get('petite') / 2);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
</style>

<script lang="ts">
  import Link from './Link.svelte';

  export let title: string;

  interface ILink {
    title: string;
    slug: string;
  }

  export let items: ILink[];
</script>
