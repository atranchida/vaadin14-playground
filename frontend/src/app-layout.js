import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';

class AppLayout extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                }
                
                #page {
                    width: 100%;
                    height: 100%;
                }
                
                #header {
                    height: 50px;
                }
                
                #content {
                    width: 100%;
                    height: 100%;
                }
                
            </style>
<vaadin-vertical-layout id="page">
 <vaadin-horizontal-layout id="header"></vaadin-horizontal-layout>
 <div id="content">content</div>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'app-layout';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(AppLayout.is, AppLayout);
