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
window.customElements.define('link-btn', standardBtn);

// HIGHLIGHT LINK
standardBtnTemplate.innerHTML = `
  <style>
    .highlight-link {
      text-decoration: none;
      color: black;
      opacity: 50%;
      transition: 0.5s;
      cursor: pointer;
    }
    .highlight-link:hover {
      border-radius: 3px;
      padding-right: 0.1em;
      margin-left: -0.1em;
      margin-right: -0.1em;
      padding-left: 0.1em;
      background-color: grey;
      opacity: 100%;
      color: white;
    }
  </style>
  <a class="highlight-link">
  </a>
`;
class highlightLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(standardBtnTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('highlight-link', highlightLink);

// UNDERLINED LINK
standardBtnTemplate.innerHTML = `
  <style>
    .underline-link {
      cursor: pointer;
      color: black;
      opacity: 50%;
      transition: 0.5s;
      cursor: pointer;
    }
    .underline-link:hover{
      text-decoration:none;
      border-radius: 3px;
      padding-right: 0.1em;
      margin-left: -0.1em;
      margin-right: -0.1em;
      padding-left: 0.1em;
      background-color: grey;
      opacity: 100%;
      color: white;
    }
  </style>
  <a class="underline-link"></a>
`;
class underlineLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(standardBtnTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('underline-link', underlineLink);