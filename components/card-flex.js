// FLEX CARD CONTAINER
const flexCardsTemplate = document.createElement('template');
  flexCardsTemplate.innerHTML = `
  <style>
  .flexCards{
    display: flex;
    flex-direction: row;
  }
  @media only screen and (max-width: 400px) {
    .flexCards {
      padding: 20px;
      height: 250px;
      overflow-x: scroll;
      overflow-y: scroll;
    }
  }
  @media only screen and (min-width: 401px) and (max-width: 600px) {
    .flexCards {
      padding: 20px;
      height: 280px;
      overflow-x: scroll;
      overflow-y: scroll;
    }
  }
  ::slotted(div),
  ::slotted(section){
    border-radius: var(--borderRadius);
    padding: var(--padding);
    height: 200px;
    box-shadow: -5px 0 10px white, 1px 1px 10px lightgrey;
    transition: 0.5s;
    margin-right: -50px;
    -webkit-backdrop-filter: var(--blur);
    backdrop-filter: var(--blur);
    overflow: hidden;
    transition: 0.5s;
  }
  ::slotted(div:hover),
  ::slotted(section:hover){
    overflow: auto;
    cursor: pointer;
    user-select: none;
    z-index: 2;
  }
  ::slotted(div:last-child),
  ::slotted(section:last-child){
    margin-right: 10px;
  }
  @media only screen and (max-width: 400px) {
    ::slotted(div:hover),
    ::slotted(section:hover){
      transform: translateY(-5px);
      margin-right: 10px;
      max-width:300px;
      min-width:150px;
      overflow-y:auto;
    }
  }
  @media only screen and (min-width: 401px) and (max-width: 600px) {
    ::slotted(div:hover),
    ::slotted(section:hover){
      transform: translateY(-10px);
      margin-right: 20px;
      height: 230px;
      min-width:175px;
    }
  }
  @media only screen and (min-width: 601px) {
    ::slotted(div:hover),
    ::slotted(section:hover){
      transform: translateY(-15px);
      margin-right: 30px;
      height: auto;
      min-width:200px;
    }
  }
  </style>
  <section class="flexCards">
    <slot></slot>
  </section>
`;
class flexCardContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(flexCardsTemplate.content.cloneNode(true));
  }
}
window.customElements.define('card-flex', flexCardContainer);