<div class="bc__block">
  <div class="bc__content bc__color-scheme--light">
    <h2>Code Snippets</h2>
    <div class="bc__sub-section">
      <code class="bc__code-block">
<pre>
{@html codeSnippet}
</pre>
      </code>
    </div>
    <div class="bc__sub-section">
      <h3>
        Inline Snippets
      </h3>
      <p>
        Inline code snippets are as simple as wrapping text in a
        <code>&lt;code&gt;</code>code<code>&lt;/code&gt;</code> tag.
      </p>
    </div>
    <div class="bc__sub-section">
      <h3>Code Blocks</h3>
      <code class="bc__code-block">
<pre>
&lt;code class="bc__code-block"&gt;
&lt;pre&gt;
  console.log("Hello world!");
&lt;/pre&gt;
&lt;/code&gt;
</pre>
      </code>
      <ul>
        <li>
          <p>
            The browser will honor the exact indentation of the
            <code>&lt;pre&gt;&lt;/pre&gt;</code> tag.
          </p>
        </li>
        <li>
          <p>
            It's advised to use HTML entity codes when typing a code
            snippet.  For example, the left and right arrow brackets in
            these docs use <code>&amp;lt;</code> and <code>&amp;gt;</code>
            respectively.
          </p>
        </li>
        <li>
          <p>
            Since indentation and line breaks matter in various languages
            (apart for readability reasons), code snippets will scroll
            horizontally when their content overflows on the x axis.
          </p>
          <p>
            The scroll bars that appear on desktop browsers will be
            themed by the browser, usually based on its light/dark
            mode setting.
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="bc__content bc__color-scheme--dark">
    <h3>Code Snippets - Dark Mode</h3>
    <p>
      Inline example: <code>console.log("Hello world!");</code>.
    </p>
    <br>
    <code class="bc__code-block">
<pre>
// code snippet
console.log("Hello World!");
</pre>
    </code>
  </div>
</div>

<script lang="ts">
  const codeSnippet = `
    // Some file.ts
    const foo = (): number => {
      let bar = 12;
      return bar + 45;
    }
  `;
</script>
