import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-password-field.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class LoginLayout extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                }
                
                .login-content {
                    padding: 20px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                }
               
            </style>
<div style="width: 100%; height: 100vh; display: flex;" class="login-container">
 <div style="width: 400px; margin: auto;" class="login-content">
  <vaadin-vertical-layout theme="spacing">
   <vaadin-combo-box id="realms" class="realms" style="width: 100%;" label="Realm:"></vaadin-combo-box>
   <vaadin-text-field label="Username:" placeholder="" id="username" style="width: 100%;" autofocus="true"></vaadin-text-field>
   <vaadin-password-field label="Password:" placeholder="" value="" id="password" style="width: 100%;" has-value></vaadin-password-field>
   <vaadin-horizontal-layout id="buttonLayout" style="width: 100%;">
    <vaadin-button theme="primary" id="save" style="margin: auto; width: 150px;">
      Login 
    </vaadin-button>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </div>
</div>
`;
    }

    static get is() {
        return 'login-layout';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(LoginLayout.is, LoginLayout);
