// CONTENT CARD
const containerSplitTemplate = document.createElement('template');
containerSplitTemplate.innerHTML = `
  <style>
    section{
      border-radius: var(--borderRadius);
      margin: var(--margin) 0;
      display:grid;
    }
    @media only screen and (max-width: 650px) {
      section {
        grid-template-columns: 1fr;
      }
    }
    @media only screen and (min-width: 651px) {
      section {
        grid-template-columns: 1fr 1fr;
        gap: calc(var(--margin)*3);
      }
    }
  </style>
  <section>
    <slot></slot>
  </section>
`;
class containerSplit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(containerSplitTemplate.content.cloneNode(true));
    // const container = this.shadowRoot.querySelector("section");
    // const cardColor = this.getAttribute('cardColor');
    // const txtColor = this.getAttribute('txtColor');
    // const borderType = this.getAttribute('borderType');

    // container.setAttribute('style', `${cardColor}`);
  }
}
window.customElements.define('container-split', containerSplit);