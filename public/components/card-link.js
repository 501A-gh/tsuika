// CONTENT CARD
const cardNormalTemplate = document.createElement('template');
cardNormalTemplate.innerHTML = `
  <style>
    section{
      border-radius: var(--borderRadius);
      padding: var(--padding);
      margin: calc(var(--margin)*2) 0;
      min-width:250px;
      color:var(--textColor1);
    }
    .boxShadow{
      box-shadow: var(--boxShadow);
    }
    .border{
      border: var(--border);
      background-color:var(--grey0);
    }
  </style>
  <section>
    <div>
      <h4></h4>
      <p></p>
    </div>
    <img></img>
  </section>
`;
class cardNormal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardNormalTemplate.content.cloneNode(true));
    const card = this.shadowRoot.querySelector("section");
    const cardColor = this.getAttribute('cardColor');
    const txtColor = this.getAttribute('txtColor');
    const borderType = this.getAttribute('borderType');

    card.setAttribute('style', `background-color:${cardColor}; color:${txtColor};`);
    if (borderType === "boxShadow") {
      card.setAttribute('class', 'boxShadow');      
    }if (borderType === "border") {
      card.setAttribute('class', 'border');      
    }
  }
}
window.customElements.define('card-normal', cardNormal);