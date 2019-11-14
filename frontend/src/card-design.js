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
                                
                .card{
                    font-size: 14px;
                    width: 250px;
                    height: 100%;
                    background-color: white;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    margin-top: 8px;
                    padding: 10px;
                }
                
                .issue-name {
                    font-weight: bold;
                }
                
                .milestone {
                    color: gray;
                }
                
                .issue-details {
                    width: 100%;
                    border-bottom: 1px solid #e5e5e5;
                    margin-bottom: 5px;
                }
                     
                .tag {
                    background-color: lightsalmon;
                    border-radius: 4px;
                    padding: 4px;
                }
            </style>
<vaadin-vertical-layout class="card">
 <vaadin-vertical-layout class="issue-details">
  <span>Constellation #XXX </span>
  <span class="issue-name">Issue Name</span>
  <span class="milestone">Milestone </span>
 </vaadin-vertical-layout>
 <div class="tag-section" style="width: 100%;">
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
  <label class="tag">tag</label>
 </div>
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
