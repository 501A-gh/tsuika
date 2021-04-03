// IMAGE BLUR
const imgMiniTemplate = document.createElement('template');
imgMiniTemplate.innerHTML = `
    <style>
        img{
            border-radius: 50px;
            border: var(--thickBorder);
        }
        h3{
            font-family:var(--headerFont);
            text-align: center;
            margin: 5px;
        }
        section{
            border-radius: calc(var(--borderRadius)*2);
            padding:var(--padding);
            margin:var(--margin);
            -webkit-backdrop-filter: var(--blur);
            backdrop-filter: var(--blur);
            background: var(--glassBack);
            max-width:150px;
            min-width:100px;
        }
        div{
            display:flex;
            justify-content:center;
        }
        .boxShadow{
            box-shadow: var(--boxShadow);
        }
        .border{
            border: var(--glassBorder);
        }
    </style>
    <section>
        <h3></h3>
        <div>
            <img alt="No Image Found">
        </div>
    </section>
`;
class imgMini extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(imgMiniTemplate.content.cloneNode(true));
    const img = this.shadowRoot.querySelector("img");
    const section = this.shadowRoot.querySelector("section");
    const h3 = this.shadowRoot.querySelector("h3");

    const header = this.getAttribute('header');
    const imgUrl = this.getAttribute('imgUrl');

    const width = this.getAttribute('width') || this.getAttribute('x');
    const height = this.getAttribute('height') || this.getAttribute('y');
    const borderType = this.getAttribute('borderType');
    
    img.setAttribute('src', `${imgUrl}`);
    section.setAttribute('style', `width:${width}+10px;`);
    img.setAttribute('style', `width:${width}; height:${height};`);
    
    h3.innerHTML = header; 
    if (header === null) {
      h3.remove();
    }
    
    if (borderType === "boxShadow") {
        section.setAttribute('class', 'boxShadow');      
    }if (borderType === "border") {
        section.setAttribute('class', 'border');      
    }
  }
}
window.customElements.define('img-mini', imgMini);