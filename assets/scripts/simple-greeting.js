//import {PolymerElement, html} from '@polymer/polymer';

// import 'https://cdn.jsdelivr.net/npm/@polymer/polymer@3.4.1/polymer-element.min.js'
// import 'https://cdn.jsdelivr.net/npm/@polymer/paper-card@3.0.1/paper-card.min.js'
// import 'https://cdn.jsdelivr.net/npm/@polymer/paper-button@3.0.1/paper-button.min.js'
// import '@polymer/paper-card/paper-card.js';
// import '@polymer/paper-button/paper-button.js';

// import '@polymer/paper-card/paper-card.js'
// import '@polymer/paper-card/paper-button.js'
import {LitElement, html, css} from 'https://unpkg.com/lit?module';
import {customElement, property, query} from 'https://unpkg.com/lit/decorators.js?module';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`p { color: blue }`;
  }

  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);