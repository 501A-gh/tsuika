// CONTENT CARD
const cardPTemplate = document.createElement('template');
cardPTemplate.innerHTML = `
  <style>
    p{
      border-radius: var(--borderRadius);
      padding: var(--padding);
      margin: var(--margin);
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
      const border = this.getAttribute('border');

      p.setAttribute('style', `margin-left:${indent}; background-color:${cardColor}; color:${txtColor}; border:${border}`);
  }
}
window.customElements.define('card-p', cardP);