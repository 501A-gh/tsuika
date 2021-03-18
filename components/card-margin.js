const cardMarginTemplate = document.createElement('template');
cardMarginTemplate.innerHTML = `
  <style>
  section{
    margin:0px;
  }
    @media only screen and (max-width: 400px) {
      section{
        padding: 1% 2% 1% 2%;
      }
    }
    @media only screen and (min-width: 401px) and (max-width: 600px) {
      section {
        padding: 2% 4% 2% 4%;
      }
    }
    @media only screen and (min-width: 601px) and (max-width: 1000px) {
      section {
        padding: 3% 6% 3% 6%;
      }
    }
    @media only screen and (min-width: 1001px) {
      section {
        padding: 4% 8% 4% 8%;
      }
    }
  </style>
  <section class="grid">
      <slot></slot>
  </section>
`;
class cardMargin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardMarginTemplate.content.cloneNode(true));
    const cardColor = this.getAttribute('cardColor');
    this.shadowRoot.querySelector("section").setAttribute('style',`background-color:${cardColor};`);
  }
}
window.customElements.define('card-margin', cardMargin);