// GRAPH
const barGraphTemplate = document.createElement('template');
barGraphTemplate.innerHTML = `
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
      animation: bargraphAni 0.5s;
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
    this.shadowRoot.appendChild(barGraphTemplate.content.cloneNode(true));

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
window.customElements.define('graph-bar', barGraph);