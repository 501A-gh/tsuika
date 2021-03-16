// IMAGE BLUR
const imgShadowTemplate = document.createElement('template');
imgShadowTemplate.innerHTML = `
  <style>
    div {
      position: absolute;
      filter: var(--lightBlur) opacity(0.6);
      transform: scale(1.02,1.02);
      z-index: -1;
      background-size: cover;
      border-radius: var(--borderRadius);
    }
    .blurAction:hover{
      transform: scale(0.92, 0.92);
      animation: blur var(--transitionSpeed);
    }
    @keyframes blur{
      0%{
        transform: scale(1.02,1.02);
      }
      100%{
        transform: scale(0.92, 0.92);
      }
    }
    img{
      border-radius: var(--borderRadius);
    }
    section{
      position:relative;
    }
    </style>
    <section>
        <a>
          <img alt="No Image Found">
        </a>
        <div></div>
    </section>
`;
class imgShadow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(imgShadowTemplate.content.cloneNode(true));
    const a = this.shadowRoot.querySelector("a");
    const img = this.shadowRoot.querySelector("img");
    const div = this.shadowRoot.querySelector("div");
    const hrefLink = this.getAttribute('hrefLink');
    const imgUrl = this.getAttribute('imgUrl');

    const width = this.getAttribute('width') || this.getAttribute('x');
    const height = this.getAttribute('height') || this.getAttribute('y');
    const top = this.getAttribute('top') || this.getAttribute('distance');
    
    a.setAttribute('href', `${hrefLink}`);      
    img.setAttribute('src', `${imgUrl}`);
    img.setAttribute('style', `width:${width}; height:${height}; margin-bottom:${top}`);
    
    div.setAttribute('style', `background-image: url("${imgUrl}"); top:${top}; width:${width}; height:${height}`);
    if (hrefLink ==! null) {
      div.setAttribute('class', 'blurAction');
    }
  }
}
window.customElements.define('img-shadow', imgShadow);