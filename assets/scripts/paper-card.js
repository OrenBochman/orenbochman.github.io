import {LitElement, html, css} from 'https://unpkg.com/lit?module';
import {customElement, property, query} from 'https://unpkg.com/lit/decorators.js?module';

export class PaperCard extends LitElement {
  static get styles() {
    return css`

    p { color: blue }
    
    :host {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      background-color: var(--paper-card-background-color, var(--primary-background-color));
      border-radius: 2px;

      @apply --paper-font-common-base;
      @apply --paper-card;
    }

    /* IE 10 support for HTML5 hidden attr */
    :host([hidden]), [hidden] {
      display: none !important;
    }

    .header {
      position: relative;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      overflow: hidden;

      @apply --paper-card-header;
    }

    .header iron-image {
      display: block;
      width: 100%;
      --iron-image-width: 100%;
      pointer-events: none;

      @apply --paper-card-header-image;
    }

    .header .title-text {
      padding: 16px;
      font-size: 24px;
      font-weight: 400;
      color: var(--paper-card-header-color, #000);

      @apply --paper-card-header-text;
    }

    .header .title-text.over-image {
      position: absolute;
      bottom: 0px;

      @apply --paper-card-header-image-text;
    }

    :host ::slotted(.card-content) {
      padding: 16px;
      position:relative;

      @apply --paper-card-content;
    }

    :host ::slotted(.card-actions) {
      border-top: 1px solid #e8e8e8;
      padding: 5px 16px;
      position:relative;

      @apply --paper-card-actions;
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
    }`;
  }

  static get properties() {
    return {
       /**
       * The title of the card.
       */
      heading: {type: String, value: '', observer: '_headingChanged'},

      /**
       * The url of the title image of the card.
       */
      image: {type: String, value: ''},

      /**
       * The text alternative of the card's title image.
       */
      alt: {type: String},

      /**
       * When `true`, any change to the image url property will cause the
       * `placeholder` image to be shown until the image is fully rendered.
       */
      preloadImage: {type: Boolean, value: false},

      /**
       * When `preloadImage` is true, setting `fadeImage` to true will cause the
       * image to fade into place.
       */
      fadeImage: {type: Boolean, value: false},

  /**
   * This image will be used as a background/placeholder until the src image
   * has loaded. Use of a data-URI for placeholder is encouraged for instant
   * rendering.
   */
  placeholderImage: {type: String, value: null},

  /**
   * The z-depth of the card, from 0-5.
   */
  elevation: {type: Number, value: 1, reflectToAttribute: true},

  /**
   * Set this to true to animate the card shadow when setting a new
   * `z` value.
   */
  animatedShadow: {type: Boolean, value: false},

  /**
   * Read-only property used to pass down the `animatedShadow` value to
   * the underlying paper-material style (since they have different names).
   */
  animated: {
    type: Boolean,
    reflectToAttribute: true,
    readOnly: true,
    computed: '_computeAnimated(animatedShadow)'
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
      
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`;

  }
}

customElements.define('paper-card', PaperCard);

