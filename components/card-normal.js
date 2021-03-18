// CONTENT CARD
const cardNormalTemplate = document.createElement('template');
cardNormalTemplate.innerHTML = `
  <style>
    h1{
      font-family:var(--headerFont);
    }
    section{
      font-family:var(--font);
      border-radius: var(--borderRadius);
      padding: var(--padding);
      margin: var(--margin);
    }
    .boxShadow{
      box-shadow: var(--boxShadow);
    }
    .border{
      border: var(--border);
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
    const borderType = this.getAttribute('borderType');

    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
    card.setAttribute('style', `background-color:${cardColor}; color:${txtColor};`);
    if (borderType === "boxShadow") {
      card.setAttribute('class', 'boxShadow');      
    }if (borderType === "border") {
      card.setAttribute('class', 'border');      
    }
  }
}
window.customElements.define('card-normal', cardNormal);