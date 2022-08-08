const codeBlockTemplate = document.createElement('template');
// margin: calc(var(--margin)*2) 0;
// font-family:var(--font);
// color:var(--textColor1);

// border: var(--border);

codeBlockTemplate.innerHTML = `
  <style>
    pre{
      border-radius: var(--borderRadius);
      overflow-x: scroll;
      overflow-y: hidden;
      margin: calc(var(--margin)*1) 0;
      white-space: pre-wrap;
    }
    code{
      padding: calc(var(--padding));
    }
    </style>
    <pre>
    </pre>
    `;
    // <code>
    // </code>
class codeBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(codeBlockTemplate.content.cloneNode(true));
    const pre = this.shadowRoot.querySelector("pre");
    const lang = this.getAttribute('lang');
    const theme = this.getAttribute('theme');
    const codeText = this.getAttribute('code');

    pre.innerHTML = '<p style="text-align:center">Loading Code Block ...</p>';
    shiki.getHighlighter({
      theme: theme
    }).then(highlighter => {
      const code = highlighter.codeToHtml(`${codeText}`, { lang: lang })
      pre.innerHTML = code;
    })
  }
}
window.customElements.define('code-block', codeBlock);