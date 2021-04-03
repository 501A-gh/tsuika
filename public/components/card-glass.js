// GLASS CARD
const cardGlassTemplate = document.createElement('template');
cardGlassTemplate.innerHTML = `
  <style>
    h1{
      font-family:var(--headerFont);
    }
    section{
      font-family:var(--font);
      border-radius: var(--borderRadius);
      padding: var(--padding);
      -webkit-backdrop-filter: var(--blur);
      backdrop-filter: var(--blur);
      background: var(--glassBack);
      box-sizing: border-box;
      z-index:3;
    }
    .boxShadow{
      box-shadow: var(--boxShadow);
    }
    .border{
      border: var(--glassBorder);
    }
  </style>
  <section>
     <h1></h1>
     <slot></slot>
  </section>
`;
class cardGlass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardGlassTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    const section = this.shadowRoot.querySelector("section");
    const borderType = this.getAttribute('borderType');

    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
    if (borderType === "boxShadow") {
      section.setAttribute('class', 'boxShadow');      
    }if (borderType === "border") {
      section.setAttribute('class', 'border');      
    }
  }
}
window.customElements.define('card-glass', cardGlass);