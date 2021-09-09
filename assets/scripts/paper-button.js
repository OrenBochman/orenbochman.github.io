import {LitElement, html, css} from 'https://unpkg.com/lit?module';
import {customElement, property, query} from 'https://unpkg.com/lit/decorators.js?module';

export class PaperButton extends LitElement {
  static get styles() {
    return css`
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;
      @apply --paper-font-common-base;
      @apply --paper-button;
    }
    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }
    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }
    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }
    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }
    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
    :host([hidden]) {
      display: none !important;
    }
    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }
    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }
    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;
      @apply --paper-button-disabled;
    }
    :host([disabled][raised]) {
      background: #eaeaea;
    }
    :host([animated]) {
      @apply --shadow-transition;
    }
    paper-ripple {
      color: var(--paper-button-ink-color);
    }    

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
    rating-element {
      display: inline-flex;
      align-items: center;
    }`;
  }

  static get properties() {
    return {
      /**
       * If true, the button should be styled with a shadow.
       */
      raised: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
        observer: '_calculateElevation',
      }
    }
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
    <style include="paper-material-styles">
      /* Need to specify the same specificity as the styles imported from paper-material. */
      
    </style>
    <slot></slot>`;

  }
}

customElements.define('paper-button', PaperButton);

