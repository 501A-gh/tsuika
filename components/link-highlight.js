// HIGHLIGHT LINK
const highlightLinkTemplate = document.createElement('template');
highlightLinkTemplate.innerHTML = `
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
    this.shadowRoot.appendChild(highlightLinkTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('link-highlight', highlightLink);