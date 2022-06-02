// CARD CAROUSEL CONTAINER
const cardCarouselTemplate = document.createElement('template');
cardCarouselTemplate.innerHTML = `
  <style>
  section{
    display: flex;
    flex-direction: row;
    padding: calc(var(--padding)/2);
    gap:1em;
    overflow-x: auto;
  }
  ::slotted(*){
    width:300px;
  }
  </style>
  <section>
    <slot></slot>
  </section>
`;
class cardCarouselContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardCarouselTemplate.content.cloneNode(true));
  }
}
window.customElements.define('card-carousel', cardCarouselContainer);