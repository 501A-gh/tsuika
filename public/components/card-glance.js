// GLANCE CARD
const cardGlanceTemplate = document.createElement('template');
cardGlanceTemplate.innerHTML = `
  <style>
    button{
      float:right;
      font-family: var(--font);
      background-color:var(--accentColor0);
      border: 1px solid var(--accentColor0);
      border-radius: var(--borderRadius);
      padding: var(--btnPadding);
      transition: var(--transitionSpeed);
      color: var(--textColor0);
      cursor:pointer;
    }
    .active-glance {
      font-family: var(--font);
      height: 100%;
      padding: var(--padding);
      border-radius:var(--borderRadius);
      max-height: 150px;
      overflow:hidden;
      border:var(--border);
      margin: calc(var(--margin)*2) 0;
      min-width:250px;
      background-color: var(--backgroundColor);
      background-image: linear-gradient(
        to bottom,
        transparent,
        85%,
        var(--grey1)
      );
    }
    .popUp {
      font-family: var(--font);
      margin: none;
      border-radius: var(--borderRadius);
      box-shadow: var(--heavyBoxShadow);
      z-index: 20;
      overflow-y: auto;
      padding: var(--padding);
      border:var(--border);
      background-color: var(--backgroundColor);
      box-sizing: border-box;
      min-width:300px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .openBtn{
      display:block;
    }
    .closeBtn{
      display:none;
    }
    h1{
      font-family: var(--headerFont);
    }
    h1:hover{
      cursor:pointer;
    }
  </style>
  <section class="active-glance">
    <button class="openBtn"></button>
    <button class="closeBtn"></button>
    <h1 class="head"></h1>
    <slot></slot>
  </section>
`;
class cardGlance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardGlanceTemplate.content.cloneNode(true));

    const cardTitle = this.shadowRoot.querySelector("h1");

    cardTitle.innerText = this.getAttribute('header');
    if (this.getAttribute('header') === null) {
      cardTitle.remove();
    }

    const glance = this.shadowRoot.querySelector("section");
    const openBtn = this.shadowRoot.querySelector(".openBtn");
    const closeBtn = this.shadowRoot.querySelector(".closeBtn");

    openBtn.innerText = this.getAttribute('btnStart');
    closeBtn.innerText = this.getAttribute('btnEnd');

    const fontPixel = this.getAttribute('btnSize') || this.getAttribute('size');
    const btnColor = this.getAttribute('buttonColor') || this.getAttribute('btnColor');
    const txtColor = this.getAttribute('textColor') || this.getAttribute('txtColor');
    closeBtn.setAttribute('style', `font-size:${fontPixel}px; background-color:${btnColor}; color:${txtColor};`);
    openBtn.setAttribute('style', `font-size:${fontPixel}px; background-color:${btnColor}; color:${txtColor};`);

    openBtn.addEventListener("click", function () {
      glance.removeAttribute('class', 'active-glance');
      glance.setAttribute('class', 'popUp');
      closeBtn.setAttribute('style', 'display:block;');
      openBtn.setAttribute('style', 'display:none;');
    })
    closeBtn.addEventListener("click", function () {
      glance.removeAttribute('class', 'popUp');
      glance.setAttribute('class', 'active-glance');
      closeBtn.setAttribute('style', 'display:none;');
      openBtn.setAttribute('style', 'display:block;');
    })
  }
}
window.customElements.define('card-glance', cardGlance);