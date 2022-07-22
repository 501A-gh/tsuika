const codeBlockTemplate = document.createElement('template');
// margin: calc(var(--margin)*2) 0;
// font-family:var(--font);
// color:var(--textColor1);

// border: var(--border);

codeBlockTemplate.innerHTML = `
  <style>
    pre{
      border-radius: var(--borderRadius);
    }
    code{
      padding: var(--padding);
    }
  </style>
  <pre>
    <code></code>
  </pre>
`;
class codeBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(codeBlockTemplate.content.cloneNode(true));
    const pre = this.shadowRoot.querySelector("pre");
    const lang = this.getAttribute('lang');
    const theme = this.getAttribute('theme');
    const codeText = this.getAttribute('code');

    console.log(shiki)
    shiki.getHighlighter({
      theme: theme
    })
    .then(highlighter => {
      const code = highlighter.codeToHtml(`${codeText}`, { lang: lang })
      pre.innerHTML = code;
    })
  }
}
window.customElements.define('code-block', codeBlock);