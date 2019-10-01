import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ColumnDesign extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">

.column > * { 
    background-color: #e2e4e6;
    color: #333;
    padding: 0 10px;
}
  
  .column header {
    line-height: 36px;
    font-size: 16px;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .column footer {
    line-height: 36px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #888;
  }
  
  .column ul {
    list-style: none;
    margin: 0;
    overflow-y: auto;
  }
  
  .column li {
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }          
</style>
<div class="column">
 <header>
  <span id="column-header">Column Header </span>
 </header>
 <div id="card-layout"></div>
 <footer>
  <vaadin-button theme="icon" aria-label="Add new">
   <iron-icon icon="lumo:plus"></iron-icon>
  </vaadin-button>
 </footer>
</div>
`;
    }

    static get is() {
        return 'column-design';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(ColumnDesign.is, ColumnDesign);
