// IMAGE BLUR
const imgBlurTemplate = document.createElement('template');
imgBlurTemplate.innerHTML = `
  <style>
    .blur {
      position: absolute;
      filter: var(--lightBlur) opacity(.6);
      transform: scale(1.02,1.02);
      z-index: -1;
      background-size: cover;
      border-radius: var(--borderRadius);
      animation: blur var(--transitionSpeed);
    }
    @keyframes blur{
      0%{
      }
      35%{
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
        <img alt="No Image Found">
        <div class="blur"></div>
    </section>
`;
class imgBlur extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(imgBlurTemplate.content.cloneNode(true));

    const img = this.shadowRoot.querySelector("img");
    const blur = this.shadowRoot.querySelector(".blur");
    const imgUrl = this.getAttribute('imgUrl') || this.getAttribute('url');

    const width = this.getAttribute('width') || this.getAttribute('x');
    const height = this.getAttribute('height') || this.getAttribute('y');
    const top = this.getAttribute('top') || this.getAttribute('distance');
      
      
    img.setAttribute('src', `${imgUrl}`);
    img.setAttribute('style', `width:${width}; height:${height}; margin-bottom:${top}`);
    
    blur.setAttribute('style', `background-image: url("${imgUrl}"); top:${top}; width:${width}; height:${height}`);
  }
}
window.customElements.define('img-blur', imgBlur);