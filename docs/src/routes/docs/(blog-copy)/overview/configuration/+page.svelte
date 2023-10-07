<div class="bc__block">
  <div class="bc__content">
    <h2>Configuration</h2>
    <div class="bc__sub-section">
      <p>
        Although the style guide is implemented in SCSS, it exposes a collection
        of CSS custom properties and, of course, can be modified via the CSS
        cascade.  The most robust configuration method however, is a SASS map:
      </p>
    </div>
    <div class="bc__sub-section">
      <code class="bc__code-block">
<pre>
@use '~@jon-richards/blog-copy';
@use 'sass:map';

/**
 * All fields are optional and will be combined with the guide's default
 * configuration map.
 *
 * This map also represents the default configuration values.
 */
$config: (

  /**
   * Changes the namespace used by the guide.  ALL classes and custom properties
   * will use this namespace when rendered.
   */
  'namespace': 'bc',

  /**
   * Governs the colors used by the guide, in both light and dark modes.
   * - See the "colors" section for tips on selecting palettes with good
   *   contrast for supporting Web Content Accessibility requirements.
   * - Supports adding extra values.
   * - Each value will appear as a namespaced custom property.
   */
  'colors': (
    'light': (
      'dark': hsl(30deg, 8%, 70%),
      'mid': hsl(30deg, 8%, 85%),
      'bright': hsl(30deg, 8%, 95%)
    ),
    'shadow': (
      'dark': hsl(20deg, 8%, 0%),
      'mid': hsl(20deg, 8%, 7%),
      'bright': hsl(200deg, 8%, 14%)
    ),
    'accent': (
      'dark': hsl(160deg, 90%, 25%),
      'mid': hsl(160deg, 49%, 49%),
      'bright': hsl(160deg, 49%, 80%)
    )
  ),

  /**
   * Governs the fonts used by the guide in various contexts.
   * - Supports adding extra values.
   * - Each value will appear as a namespaced custom property.
   */
  'fonts': (
    'heading': (
      'family': '"Helvetica Neue", Helvetica, Arial, sans-serif',
      'weights': (
        'bold': 700
      )
    ),
    'copy': (
      'family': 'Georgia, serif',
      'weights': (
        'normal': 400,
        'semibold': 500,
        'bold': 700,
      )
    ),
    'code': (
      'family': 'monospace',
      'weights': (
        'normal': 400,
      )
    )
  ),

  /**
   * Governs the spacing between various elements in the guide, e.g. the padding
   * used by aside and blockquote tags.
   * - Each value will appear as a namespaced custom property.
   * - As these values are scalar, avoiding names that are strictly sequential
   *   (xl, xxl) should be avoided.
   */
  'spacing': (
    'whitespace': (
      'pixie': 0.4rem,
      'petite': 2rem,
      'base': 3rem,
      'grande': 6rem
    )
  )
);

@include blog-copy.configure($config);

@include blog-copy.render();
</pre>
      </code>
    </div>
  </div>
</div>
