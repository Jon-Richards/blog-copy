<footer>
  <ContentBlock>
    <div class="footer-content">
      &copy; {copyright}
    </div>
  </ContentBlock>
</footer>

<script lang="ts">
  import ContentBlock from '$lib/components/ContentBlock.svelte';

  export let copyright: string;
</script>

<style lang="scss">
  @use '$lib/utils/colors';

  footer {
    background-color: colors.get('shadow--mid');
    height: var(--docs__footer-height);
  }

  .footer-content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
</style>
