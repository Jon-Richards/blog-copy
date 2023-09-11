<a href={href} target={target}>
  <slot></slot>
</a>

<style lang="scss">
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  a, a:visited, a:active {
    color: colors.get('light--bright');
    display: inline-block;
    position: relative;
    text-decoration: none;
  }
  a:hover, a:focus, a:active {
    color: colors.get('accent--mid');
    outline: none;
  }
</style>

<script lang="ts">
  export let href: HTMLLinkElement['href'];
  export let target: HTMLLinkElement['target'] = '_self';
</script>
