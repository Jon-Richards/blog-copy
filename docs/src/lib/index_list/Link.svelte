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
  
    &::before {
      border: thin solid colors.get('light--dim');
      content: '';
      display: block;
      height: calc(dimensions.get('petite') / 1.5);
      left: -1rem;
      position: absolute;
      top: 0.3rem;
      width: calc(dimensions.get('petite') / 1.5);
    }
  }
  a:hover, a:focus, a:active {
    color: colors.get('accent--mid');
    outline: none;
  
    &::before {
      border: thin solid colors.get('accent--mid');
    }
  }
</style>

<script lang="ts">
  export let href: HTMLLinkElement['href'];
  export let target: HTMLLinkElement['target'] = '_self';
</script>
