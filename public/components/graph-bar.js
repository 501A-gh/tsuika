// GRAPH
const graphBarTemplate = document.createElement('template');
graphBarTemplate.innerHTML = `
  <style>
    .bar-graph {
      border-radius: var(--borderRadius);
      position: relative;
      margin:var(--margin) 0;
      width: auto;
      height: auto;
      padding: 3px;
      background-color: var(--grey0);
      border:var(--border);
    }
    .bar-graph div {
      background-color: var(--accentColor0);
      border-radius: calc(var(--borderRadius)/2);
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
  <section class="bar-graph">
    <div></div>
  </section>
`;
class graphBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(graphBarTemplate.content.cloneNode(true));
    const percentage = this.getAttribute('%');
    this.shadowRoot.querySelector('div').setAttribute('style', `width:${percentage}%;`);
  }
}
window.customElements.define('graph-bar', graphBar);