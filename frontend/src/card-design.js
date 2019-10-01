import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

class CardDesign extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
                
                .main-layout{
                    width: 350px;
                    height: 100%;
                    background-color: white;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    margin-top: 5px;
                    padding: 10px;
                }
            </style>
<vaadin-vertical-layout class="main-layout">
 <span>Issue ID </span>
 <span>Issue Name </span>
 <span>Issue Details</span>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'card-design';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(CardDesign.is, CardDesign);
