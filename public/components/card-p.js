const cardPTemplate = document.createElement('template');
cardPTemplate.innerHTML = `
  <style>
    p{
      font-family:var(--font);
      border-radius: var(--innerBorderRadius);
      padding: var(--padding);
      margin: calc(var(--margin)*2) 0;
      color:var(--textColor1);
    }
    .banner{
      color: var(--textColor0);
      background-color: var(--accentColor0);
      border:var(--borderWidth) solid var(--accentColor1);
      border-radius: var(--borderRadius);
    }
    .quote{
      font-family:var(--headerFont);
      font-style:italic;
      border-radius:0px;
      border-left: 2px solid var(--accentColor0);
      background-color: var(--grey0);
      border-radius:0px var(--borderRadius) var(--borderRadius) 0px;
    }
  </style>
  <p>
    <slot></slot>
  </p>
`;
class cardP extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardPTemplate.content.cloneNode(true));
    const p = this.shadowRoot.querySelector("p");
    const indent = this.getAttribute('indent');
    const cardColor = this.getAttribute('cardColor');
    const txtColor = this.getAttribute('txtColor');
    const type = this.getAttribute('type');

    p.setAttribute('style', `margin-left:${indent}; background-color:${cardColor}; color:${txtColor};`);

    if (type === "banner") {
      p.setAttribute('class', 'banner');      
    }if (type === "quote") {
      p.setAttribute('class', 'quote');
    }
  }
}
window.customElements.define('card-p', cardP);