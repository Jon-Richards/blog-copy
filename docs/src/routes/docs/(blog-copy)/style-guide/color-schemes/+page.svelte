<div class="bc__block">
  <div class="bc__content">
    <div class="bc__sub-section">
      <h2>Light &amp; Dark Modes</h2>
      <p>
        Both light and dark modes are supported, as well as utilizing the
        user's preferred color scheme.
      </p>
      <p>
        If the user has a preferred color scheme activated, JavaScript will
        be used to apply the correct styling accordingly.  This behavior
        can be overridden via a cookie.
      </p>
      <p>
        In some cases, the lighting mode may need to be overridden manually.
        For example, if the content appears in front of an image which may
        be dark or light depending on the subject matter.  This
        can be achieved by adding <code>.bc__color-scheme--light</code> or
        <code>.bc__color-scheme--dark</code> to the element in which the styling
        should apply, typically a node with a <code>.layout-*</code> class.
      </p>
      <p>
        In all cases, be it user preference or manual override, an element's
        lighting mode is determined by the nearest <code>.ambient--*</code>
        class in the cascade.
      </p>
    </div>
    <div class="bc__sub-section">
      <h3>Lighting Classes</h3>
      <dl>
        <div>
          <dt>
            <code class="bc__code--no-margin">.bc__color-scheme--light</code>
          </dt>
          <dd>
            <p>
              Forces the content within the element to render with "light"
              mode styling.
            </p>
          </dd>
        </div>

        <div>
          <dt>
            <code class="bc__code--no-margin">.bc__color-scheme--dark</code>
          </dt>
          <dd>
            <p>
              Forces the content within the element to render with "dark"
              mode styling.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
