<button {type} {id} on:click>
  <slot></slot>
</button>

<style lang="scss">
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  button {
    background: none;
    border: none;
    color: colors.get('light--bright');
    display: inline-block;
    position: relative;
    text-decoration: none;
  }
  button:hover:not(:disabled), button:focus:not(:disabled) {
    color: colors.get('accent--mid');
    outline: none;
  }
  button:focus:not(:disabled) {
    box-shadow: 0 0 0.1rem 0.1rem colors.get('accent--mid');
  }
  button:not(:disabled) {
    cursor: pointer;
  }
</style>

<script lang="ts">
  export let type: HTMLButtonElement['type'] = 'button';
  export let id: HTMLButtonElement['id'];
</script>
