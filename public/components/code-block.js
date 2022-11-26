const codeBlockTemplate = document.createElement('template');
codeBlockTemplate.innerHTML = `
  <style>
    #codeBlock{
      font-family:monospace;
      color:var(--accentColor1);
      border-radius: var(--borderRadius);
      overflow-x: scroll;
      overflow-y: hidden;
      margin: calc(var(--margin)*1) 0;
      padding: var(--padding);
      background-color:var(--backgroundColor);
      border:1px solid var(--grey1);
      box-shadow:var(--lightBoxShadow);
      cursor:pointer;
    }
    #codeBlock:hover{
      border:1px solid var(--accentColor0);
      opacity:0.8
    }
  </style>
  <div id="codeBlock"/>
`;
class codeBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(codeBlockTemplate.content.cloneNode(true));
    const codeBlock = this.shadowRoot.querySelector('#codeBlock');
    const code = this.getAttribute('code');
    codeBlock.innerText = code;
    this.addEventListener("click",function(){
      navigator.clipboard.writeText(code)
      alert('Copied to clip board')
    })
  }
}
window.customElements.define('code-block', codeBlock);