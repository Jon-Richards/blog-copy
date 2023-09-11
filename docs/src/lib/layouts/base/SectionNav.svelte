<div class="root">
  <div class="content">
    <button type="button" class="title">
      <span>Jump To</span>
      <span class="material-symbols-outlined">
        arrow_drop_down
      </span>
    </button>
    <ul class="dropdown">
      <li>
        <div class="title">Overview</div>
        <ul>
          <li>
            Introduction
          </li>
          <li>
            Installation
          </li>
          <li>
            Configuration
          </li>
        </ul>
      </li>
      <li>
        <div class="title">Design Guidelines</div>
        <ul>
          <li>
            Conventions
          </li>
          <li>
            Page Structure
          </li>
          <li>
            Colors
          </li>
          <li>
            Typography
          </li>
        </ul>
      </li>
      <li>
        <div class="title">HTML Tags</div>
        <ul>
          <li>
            <a href="www.google.com">Headings</a>
          </li>
          <li>Aside</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  @use '$lib/utils/colors';
  @use '$lib/utils/dimensions';

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  button {
    align-items: center;
    background: none;
    border: none;
    color: colors.get('light--bright');
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    outline: none;
    width: 100%;

    &:hover, &:focus {
      color: colors.get('accent--mid');
    }
  }

  .root {
    width: 15rem;
    height: 3.675rem;
  }

  .content {
    background-color: colors.get('shadow--mid');
    border: thin solid colors.get('shadow--bright');
    border-radius: 0.5rem;
    padding: dimensions.get('base');
    position: relative;
    width: 15rem;

    &:focus-within {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 1);
    }
  }

  .dropdown > li:not(:last-of-type) {
    margin-bottom: dimensions.get('base');
  }

  .dropdown {
    display: none;
    width: 100%;
  }
  .root:focus-within .dropdown {
    display: block;
  }
</style>
