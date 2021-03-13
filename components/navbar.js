// SIDE NAVBAR
const sideNavbarTemplate = document.createElement('template');
sideNavbarTemplate.innerHTML = `
  <style>
    .blurBack{
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 90;
      top: 0px;
      left: 0px;
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      animation: blurAni 0.5s;
    }
    @keyframes blurAni{
      0%{
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
      }
      100%{
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
      }
    }

    .sideNavBar{
      border-radius: 20px;
      margin-top:70px;
      margin-left:10px;
      padding: 20px;
      background-color:white;
      box-shadow:1px 1px 10px lightgrey;
      position:absolute;
      display:grid;
      template-columns-row: 1fr;
      row-gap:10px;
      width: 300px;
      color: black;
      cursor: pointer;
      z-index:99;
      animation: sideBarAni 1s;
    }

    @keyframes sideBarAni{
      0%{
        margin-left:-500px;
      }
      30%{
        margin-left:30px;
      }
      55%{
        margin-left:-10px;
      }
    }

    button{
      outline:none;
      border: none;
      background-color:lightgrey;
      border-radius:10px;
      opacity:70%;
      padding: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      border: none;
      transition: 0.5s;
      font-weight:bold;
    }
    button:hover{
      cursor:pointer;
      opacity:100%;
    }
    .menu{
      margin-bottom:10px;
      margin-top:10px;
    }
    .close{
      margin:10px;
      float:right;
    }

    ::slotted(a) {
      color: black;
      z-index:99;
      text-decoration:none;
      padding: 5px;
      font-size:20px;
    }
    ::slotted(a:hover) {
      opacity: 50%;
      box-shadow:0px 2px grey;
    }
  </style>
  <div>
    <button class="menu"></button>
    <section style="display:none;">
      <button class="close"></button>
      <nav>
        <slot></slot>
      </nav>
    </section>
  </div>
`;
class sideNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(sideNavbarTemplate.content.cloneNode(true));

    // CONST
    const btnForMenu = this.shadowRoot.querySelector('.menu');
    const btnForClose = this.shadowRoot.querySelector('.close');

    const blurringFx = this.shadowRoot.querySelector('div');
    const navDisplay = this.shadowRoot.querySelector('nav');
    const sectionTag = this.shadowRoot.querySelector('section');
    
    // BUTTON FEATURES
    btnForMenu.innerText = this.getAttribute('btnStart');
    btnForClose.innerText = this.getAttribute('btnEnd');

    const fontPixel = this.getAttribute('btnSize') || this.getAttribute('size');
    const btnColor = this.getAttribute('buttonColor') || this.getAttribute('btnColor');
    const txtColor = this.getAttribute('textColor') || this.getAttribute('txtColor');
    btnForMenu.setAttribute('style', `font-size:${fontPixel}px; background-color:${btnColor}; color:${txtColor};`);
    btnForClose.setAttribute('style', `font-size:${fontPixel}px; background-color:${btnColor}; color:${txtColor};`);
    // const link = this.getAttribute('position');
    // this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);    
    btnForMenu.addEventListener("click", function () {
      blurringFx.setAttribute('class', 'blurBack');
      sectionTag.setAttribute('style', 'display:block;');
      navDisplay.setAttribute('class', 'sideNavBar');
      btnForMenu.setAttribute('style', 'display:none;');
    })
    btnForClose.addEventListener("click", function () {
      blurringFx.removeAttribute('class', 'blurBack');
      sectionTag.setAttribute('style', 'display:none;');
      navDisplay.removeAttribute('class', 'sideNavBar');
      btnForMenu.removeAttribute('style', 'display:block;');
    })
  }
}
window.customElements.define('side-navbar', sideNavbar);