const template = document.createElement('template');

// GLASS CARD
template.innerHTML = `
  <style>
    .glass-card{
      border-radius: var(--borderRadius);
      padding: var(--padding);
      -webkit-backdrop-filter: var(--blur);
      backdrop-filter: var(--blur);
      z-index:3;
      box-shadow: var(--boxShadow);
    }
  </style>
  <section class="glass-card">
     <h1></h1>
     <slot></slot>
  </section>
`;
class glassCard extends HTMLElement {
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
window.customElements.define('glass-card', glassCard);