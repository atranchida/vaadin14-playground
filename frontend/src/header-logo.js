import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `header-logo`
 *
 * HeaderLogo element.
 *
 * @customElement
 * @polymer
 */
class HeaderLogo extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                }
                
                #logo {
                    font-size: 2.5em;
                }
            </style>
            <span id="logo">Default Logo</span>
        `;
    }

    static get is() {
        return 'header-logo';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(HeaderLogo.is, HeaderLogo);
