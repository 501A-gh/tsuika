const template = document.createElement('template');

// GLASS CARD
template.innerHTML = `
  <style>
    .glass-card{
      border-radius:20px;
      padding:20px 15px 20px 15px;
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(35px);
      z-index:3;
      box-shadow:1px 1px 10px lightgrey;
    }
    .glass-card p{
      paddin:0px;
      margin:0px;
    }
    .glass-card button{
      outline:none;
      border: none;
      margin: 20px 0px -10px 0px;
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
    .glass-card button:hover{
      cursor:pointer;
      opacity:100%;
    }
    .glass-card button:hover::after{
      content:" →";
    }
  </style>
  <script>
    this.getAttribute('btnHref') = btnURL;
  </script>
  <section class="glass-card">
     <h1></h1>
     <p></p>
     <button></button>
  </section>
`;
class glassCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    this.shadowRoot.querySelector('p').innerText = this.innerHTML;
    this.shadowRoot.querySelector('button').innerText = this.getAttribute('btn');
    const link = this.getAttribute('btnHref');
    this.shadowRoot.querySelector('button').addEventListener('click', function(){
      window.location.href=`${link}`;
    });
    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
    if (this.getAttribute('btn') === null) {
      this.shadowRoot.querySelector('button').remove();
    }
  }
}
window.customElements.define('glass-card', glassCard);

// FLEX CARDS
template.innerHTML = `
  <style>
  .flex-card{
    border-radius: 10px;
    padding: 20px;
    height: 200px;
    box-shadow: -5px 0 10px white, 1px 1px 10px lightgrey;
    transition: 0.5s;
    margin-right: -50px;
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    overflow: hidden;
    transition: 0.5s;
  }
  .flex-card button{
    outline:none;
    border: none;
    margin: 20px 0px -10px 0px;
    background-color:lightgrey;
    border-radius:10px;
    opacity:70%;

    padding: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border: none;
    transition: 0.5s;
    font-weight: bold;
  }
  .flex-card:hover{
    overflow: auto;
    cursor: pointer;
    user-select: none;
    z-index: 2;
  }
  .flex-cards:last-child {
    margin-right: 10px;
  }
  .flex-card button:hover{
    cursor:pointer;
    opacity:100%;
  }
  .flex-card button:hover::after{
    content:" →";
  }
  @media only screen and (max-width: 400px) {
    .flex-card:hover{
      transform: translateY(-5px);
      margin-right: 10px;
      max-width:300px;
      min-width:150px;
      overflow-y:auto;
    }
  }
  @media only screen and (min-width: 401px) and (max-width: 600px) {
    .flex-card:hover{
      transform: translateY(-10px);
      margin-right: 20px;
      height: 230px;
      min-width:175px;
    }
  }
  @media only screen and (min-width: 601px) {
    .flex-card:hover{
      transform: translateY(-15px);
      margin-right: 30px;
      height: auto;
      min-width:200px;
    }
  }
  </style>
  <section class="flex-card">
    <h1></h1>
    <p></p>
    <button></button>
  </section>
`;
class flexCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    this.shadowRoot.querySelector('p').innerText = this.innerHTML;
    this.shadowRoot.querySelector('button').innerText = this.getAttribute('btn');
    const link = this.getAttribute('btnHref');
    this.shadowRoot.querySelector('button').addEventListener('click', function(){
      window.location.href=`${link}`;
    });
    if (this.getAttribute('btn') === null) {
      this.shadowRoot.querySelector('button').remove();
    }
  }
}
window.customElements.define('flex-card', flexCard);

// GRAPH
template.innerHTML = `
  <style>
    h1{
      margin-bottom:10px;
    }
    .bar-graph {
      border-radius: 10px;
      position: relative;
      width: auto;
      height: auto;
      padding: 1px;
    }
    .bar-graph div {
      border-radius: 5px;
      height: 20px;
      position: relative;
      animation: bargraphAni 1s ease-in;
    }
    @keyframes bargraphAni {
      0% {
        background-color: rgb(235, 235, 235);
        width: 0%;
      }
    }
  </style>
  <h1></h1>
  <section class="bar-graph">
    <div></div>
  </section>
`;
class barGraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header')+" :";

    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }

    const percentage = this.getAttribute('%');
    const barColor = this.getAttribute('color');
    const graphColor = this.getAttribute('graphColor');

    this.shadowRoot.querySelector('section').setAttribute('style', `background-color:${graphColor};`);

    this.shadowRoot.querySelector('div').setAttribute('style', `width:${percentage}%; background-color:${barColor};`);
  }
}
window.customElements.define('bar-graph', barGraph);

// GLANCE CARD
template.innerHTML = `
  <style>
    .active-glance {
      height: 100%;
      padding:15px;
      border-radius:15px;
      max-height: 180px;
      -webkit-backdrop-fil55ter: blur(35px);
      backdrop-filter: blur(35px);
      background-image: linear-gradient(
        to bottom,
        transparent,
        85%,
        lightgrey
      );
      transition:0.5s;
    }
    .active-glance:active {
      user-select: none;
      margin: none;
      width: 50%;
      height: auto;
      max-height: none;
      border-radius: calc(5px * 3);
      box-shadow: 5px 5px 10px grey;
      z-index: 2;
      position: fixed;
      background-image:none;
      top: calc(25% - 25px);
      right: calc(25% - 25px);
      transform: scale3d(1.1 1.1 1.1);
    }
    .active-glance::before {
      content: "Long Press To View";
      font-size: 0.8em;
      opacity: 60%;
      font-weight: bold;
    }
  </style>
  <section class="active-glance">
    <h1></h1>
    <p></p>
  </section>
`;
class glanceCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
    this.shadowRoot.querySelector('p').innerText = this.innerHTML;
  }
}
window.customElements.define('glance-card', glanceCard);

// STANDARD LINK BUTTON
template.innerHTML = `
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
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
template.innerHTML = `
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('highlight-link', highlightLink);

// UNDERLINED LINK
template.innerHTML = `
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('a').innerText = this.innerHTML;
    const link = this.getAttribute('linkHref');
    this.shadowRoot.querySelector('a').setAttribute('href', `${link}`);
  }
}
window.customElements.define('underline-link', underlineLink);

// LOADING ANIMATION
template.innerHTML = `
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
      -webkit-backdrop-filter: blur(50x);
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
      animation: loadAni 1s infinite;
    }
    @keyframes loadAni{
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.innerHTML;
    const objectColor = this.getAttribute('objColor');
    this.shadowRoot.querySelector('.load-ani').setAttribute('style', `background-color:${objectColor}`);
    window.addEventListener("load", function() {
      document.querySelector("load-animation").remove();
    });
  }
}
window.customElements.define('load-animation', loadAnimation);

// SIDE NAVBAR
template.innerHTML = `
  <style>
    .blurBack{
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 90;
      top: 0px;
      left: 0px;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      animation: blurAni 0.5s;
    }
    @keyframes blurAni{
      0%{
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
      }
      100%{
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
      }
    }

    .sideNavBar{
      border-radius:0px 20px 20px 0px;
      margin-top:20px;
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
      100%{
        margin-left:0px;
      }
    }

    button{
      outline:none;
      border: none;
      margin: 10px;
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));

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
    btnForMenu.addEventListener("click",
      function () {
        blurringFx.setAttribute('class', 'blurBack');
        sectionTag.setAttribute('style', 'display:block;');
        navDisplay.setAttribute('class', 'sideNavBar');
        btnForMenu.setAttribute('style', 'display:none;');
      }
    )
    btnForClose.addEventListener("click", function () {
        blurringFx.removeAttribute('class', 'blurBack');
        sectionTag.setAttribute('style', 'display:none;');
        navDisplay.removeAttribute('class', 'sideNavBar');
        btnForMenu.removeAttribute('style', 'display:block;');
      }
    )
  }
}
window.customElements.define('side-navbar', sideNavbar);