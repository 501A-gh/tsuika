// STANDARD LINK BUTTON
const standardBtnTemplate = document.createElement('template');
standardBtnTemplate.innerHTML = `
  <style>
    .btn-standard {
      padding: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border: none;
      transition: 0.5s;
      font-weight:bold;
      outline:none;
      border: none;
      background-color:lightgrey;
      border-radius:10px;
      opacity:70%;
    }
    .btn-standard:hover {
      cursor:pointer;
    }
  </style>
  <button class="btn-standard">
  </button>
`;
class standardBtn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(standardBtnTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('button').innerText = this.innerHTML;
    const link = this.getAttribute('btnHref');
    const fontPixel = this.getAttribute('btnSize') || this.getAttribute('size');
    const btnColor = this.getAttribute('buttonColor') || this.getAttribute('btnColor');
    const txtColor = this.getAttribute('textColor') || this.getAttribute('txtColor');

    this.shadowRoot.querySelector('button').addEventListener('click', function(){
      window.location.href=`${link}`;
    });
    this.shadowRoot.querySelector('button').setAttribute('style', `font-size:${fontPixel}px; background-color:${btnColor}; color:${txtColor};`);
  }
}
window.customElements.define('btn-link', standardBtn);