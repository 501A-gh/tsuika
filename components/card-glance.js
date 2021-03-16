// GLANCE CARD
const cardGlanceTemplate = document.createElement('template');
cardGlanceTemplate.innerHTML = `
  <style>
    .active-glance {
      height: 100%;
      padding:15px;
      border-radius:var(--borderRadius);
      max-height: 180px;
      overflow:hidden;
      -webkit-backdrop-filter: var(--blur);
      backdrop-filter: var(--blur);
      background-image: linear-gradient(
        to bottom,
        transparent,
        85%,
        lightgrey
      );
      animation:combackAni calc(var(--transitionSpeed)*2);
    }
    @keyframes combackAni{
      0%{
        box-shadow: var(--lightBoxShadow);
        top:50px;
        transform: var(--smallScale);
      }
      35%{
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }
    .popUp {
      margin: none;
      border-radius: var(--borderRadius);
      box-shadow: var(--heavyBoxShadow);
      z-index: 2;
      position: fixed;
      background-image:none;
      overflow-y: auto;
      padding:15px;
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(35px);
      transition: calc(var(--transitionSpeed)*2);
      animation: popUpAni calc(var(--transitionSpeed)*2);
    }
    @keyframes popUpAni{
      0%{
        transform: scale3d(0.1, 0.1, 0.1);
        box-shadow: var(--boxShadow);
        backdrop-filter: blur(0px);
        border-radius: 5px;
        top:50px;
      }
      30%{
        transform: scale3d(1.2, 1.2, 1.2);
      }
      60%{
        transform: scale3d(0.9, 0.9, 0.9);
      }
    }
    @media only screen and (max-width: 400px) {
      .popUp{
        width: 80%;
        top: calc(10% - 25px);
        right: calc(13% - 25px);
        bottom: calc(10% - 25px);
      }
    }
    @media only screen and (min-width: 401px) and (max-width: 600px) {
      .popUp{
        width: 75%;
        top: calc(15% - 25px);
        right: calc(15% - 25px);
        bottom: calc(15% - 25px);
      }
    }
    @media only screen and (min-width: 601px) {
      .popUp{
        width: 50%;
        top: calc(25% - 25px);
        right: calc(25% - 25px);
        max-height: 800px;
      }
    }
    button{
      outline:none;
      border: none;
      background-color:lightgrey;
      border-radius: var(--btnBorderRadius);
      opacity:70%;
      padding: var(--btnSidePadding);
      padding-top: var(--btnTopPadding);
      padding-bottom: var(--btnTopPadding);
      transition: var(--transitionSpeed);
      font-weight:bold;
      float:right;
      z-index:3;
    }
    button:hover{
      cursor:pointer;
      opacity:100%;
    }
    .openBtn{
      display:block;
    }
    .closeBtn{
      display:none;
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