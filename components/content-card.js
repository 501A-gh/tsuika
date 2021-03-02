// CONTENT CARD
document.createElement('template').innerHTML = `
  <style>
    section{
      border-radius: var(borderRadius);
      padding: var(--padding);
      box-shadow: var(--boxShadow);
    }
  </style>
  <section>
     <h1></h1>
     <slot></slot>
  </section>
`;
class contentCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
  }
}
window.customElements.define('content-card', contentCard);