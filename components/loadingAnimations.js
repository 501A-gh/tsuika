// LOADING ANIMATION
const loadAnimationTemplate = document.createElement('template')
  loadAnimationTemplate.innerHTML = `
  <style>
    section{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 3;
      top: 0px;
      left: 0px;
      -webkit-backdrop-filter: blur(50px);
      backdrop-filter: blur(50px);
    }
    h1{
      margin-right:15px;
      margin-left:15px;
      z-index: 4;
    }
    .load-ani {
      z-index: 4;
      width:45px;
      height:45px;
    }
    @keyframes sqrCir{
      0%{
        transform: rotate(0deg);
        border-radius:10px;
      }
      70%{
        transform: rotate(180deg);
        border-radius:30px;
      }
      100%{
        transform: rotate(360deg);
        border-radius:10px;
      }
    }
    @keyframes palse{
      0%{
        border-radius:30px;
        transform: scale3d(1,1,1);
      }
      70%{
        border-radius:30px;
        transform: scale3d(0.5,0.5,0.5);
        
      }
      100%{
        border-radius:30px;
        transform: scale3d(1,1,1);
      }
    }
    @keyframes clipPath{
      0% {
        clip-path: inset(0% 0% 100% 0%);
        border-radius:10px;
      }
      60% {
        clip-path: inset(0% 0% 60% 0%);
        border-radius:10px;
      }
      100% {
        clip-path: inset(0% 0% 0% 0%);
        border-radius:10px;
      }
    }
  </style>
  <section>
    <div class="load-ani"></div>
    <h1></h1>
  </section>
`;
class loadAnimation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(loadAnimationTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.innerHTML;
    const objectColor = this.getAttribute('objColor');
    const aniType = this.getAttribute('aniType');
    this.shadowRoot.querySelector('.load-ani').setAttribute('style', `background-color:${objectColor}; animation: ${aniType} 1s infinite`);
    window.addEventListener("load", function() {
      document.querySelector("load-animation").remove();
    });
  }
}
window.customElements.define('load-animation', loadAnimation);