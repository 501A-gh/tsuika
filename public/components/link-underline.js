// UNDERLINED LINK
const underlineLinkTemplate = document.createElement('template');
underlineLinkTemplate.innerHTML = `
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
    this.shadowRoot.appendChild(underlineLinkTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('link-underline', underlineLink);