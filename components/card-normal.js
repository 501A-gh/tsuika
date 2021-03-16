// CONTENT CARD
const cardNormalTemplate = document.createElement('template');
cardNormalTemplate.innerHTML = `
  <style>
    section{
      border-radius: var(--borderRadius);
      padding: var(--padding);
      box-shadow: var(--boxShadow);
    }
  </style>
  <section>
     <h1></h1>
     <slot></slot>
  </section>
`;
class cardNormal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardNormalTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    const card = this.shadowRoot.querySelector("section");
    const cardColor = this.getAttribute('cardColor');
    const txtColor = this.getAttribute('txtColor');

    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
    card.setAttribute('style', `background-color:${cardColor}; color:${txtColor};`);
  }
}
window.customElements.define('card-normal', cardNormal);