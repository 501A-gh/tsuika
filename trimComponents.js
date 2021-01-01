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
      padding:5px 10px 5px 10px;
      margin: 20px 0px -10px 0px;
      font-size:18px;
      background-color:lightgrey;
      border-radius:10px;
      transition: 0.5s;
      opacity:70%;
    }
    .glass-card button:hover{
      cursor:pointer;
      opacity:100%;
      box-shadow: 2px 2px 5px grey;
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
    padding:5px 10px 5px 10px;
    margin: 20px 0px -10px 0px;
    font-size:18px;
    background-color:lightgrey;
    border-radius:10px;
    transition: 0.5s;
    opacity:70%;
  }
  .flex-card:hover{
    overflow: auto;
    cursor: pointer;
    user-select: none;
    z-index: 3;
    transform: scale3d(1.02, 1.02, 1.02) translateY(50px);
    margin-right: 30px;
    height: auto;
  }
  .flex-cards:last-child {
    margin-right: 10px;
  }
  .flex-card button:hover{
    cursor:pointer;
    opacity:100%;
    box-shadow: 2px 2px 5px grey;
  }
  .flex-card button:hover::after{
    content:" →";
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
      margin: 5px;
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