const cardPTemplate = document.createElement('template');
cardPTemplate.innerHTML = `
  <style>
    p{
      font-family:var(--font);
      border-radius: var(--innerBorderRadius);
      padding: var(--padding);
      margin: calc(var(--margin)*2) 0px calc(var(--margin)*2)  0px;
    }
    .boxShadow{
      box-shadow: var(--boxShadow);
    }
    .border{
      border: var(--border);
    }
    .quote{
      font-family:var(--headerFont);
      font-style:italic;
      box-shadow: -3px 0px 0px grey;
    }
    .quote:before, .quote:after{
        font-weight:bold;
        font-size:18px;
    }
    .quote:before{
        content:open-quote;
    }
    .quote:after{
        content:close-quote;
    }
  </style>
  <p>
      <h1></h1>
      <slot></slot>
  </p>
`;
class cardP extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardPTemplate.content.cloneNode(true));
    const p = this.shadowRoot.querySelector("p");
    const indent = this.getAttribute('indent');
    const cardColor = this.getAttribute('cardColor');
    const txtColor = this.getAttribute('txtColor');
    const borderType = this.getAttribute('borderType');
  
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }

    p.setAttribute('style', `margin-left:${indent}; background-color:${cardColor}; color:${txtColor};`);

    if (borderType === "boxShadow") {
      p.setAttribute('class', 'boxShadow');      
    }if (borderType === "border") {
      p.setAttribute('class', 'border');      
    }if (borderType === "quote") {
      p.setAttribute('class', 'quote');
    }
  }
}
window.customElements.define('card-p', cardP);