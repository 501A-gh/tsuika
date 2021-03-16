// STANDARD LINK BUTTON
const btnNormalTemplate = document.createElement('template');
btnNormalTemplate.innerHTML = `
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
class btnNormal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(btnNormalTemplate.content.cloneNode(true));

    const btn = this.shadowRoot.querySelector('button');
    btn.innerText = this.innerHTML;

    const link = this.getAttribute('linkHref');
    const click = this.getAttribute('btnClick');
    const fontPixel = this.getAttribute('btnSize') || this.getAttribute('size');
    const btnColor = this.getAttribute('btnColor');
    const txtColor = this.getAttribute('txtColor');

    btn.addEventListener('click', function(){
      window.location.href=`${link}`;
    });
    btn.addEventListener('click', `${click}`);

    btn.setAttribute('style', `font-size:${fontPixel}; background-color:${btnColor}; color:${txtColor};`);
  }
}
window.customElements.define('btn-normal', btnNormal);