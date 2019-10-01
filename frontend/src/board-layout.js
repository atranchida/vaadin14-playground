import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';

class BoardLayout extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">

body {
    margin: 0;
    font-size: 14px;
}

.main-layout {
  background-color: #f2f3f4;
  color: #393939;
  padding: 0;
  overflow: auto;
}

.navbar {
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.navbar.title {
    font-size: 1.1rem;
  }
  
  :host{
    width: 100%;
  }

</style>
<vaadin-vertical-layout style="height: 100%;" class="main-layout">
 <nav class="navbar title" id="nav">
  <h3 id="title"></h3>
 </nav>
 <div style="height: 100%; margin: 10px;" id="div">
  <vaadin-horizontal-layout id="column-layout"></vaadin-horizontal-layout>
 </div>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'board-layout';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BoardLayout.is, BoardLayout);
