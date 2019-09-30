import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';

class BoardLayout extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">

body {
  margin: 0;

  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.3em;
}

.ui {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 50px 1fr;
  background-color: #f2f3f4;
  color: #393939;
}

.navbar {
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.navbar.title {
    font-size: 1.1rem;
  }

.lists {
  display: flex;
  overflow-x: auto;
}

.lists > * {
    flex: 0 0 auto;
    margin-left: 10px;
}

.lists::after {
    content: '';
    flex: 0 0 10px;
}

.list {
  width: 300px;
}

.list > * {
    background-color: #e2e4e6;
    color: #333;
    padding: 0 10px;
}
  
  .list header {
    line-height: 36px;
    font-size: 16px;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .list footer {
    line-height: 36px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #888;
  }
  
  .list ul {
    list-style: none;
    margin: 0;
    overflow-y: auto;
  }
  
  .list li {
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
                :host {
                    display: block;
                    height: 100%;
                }
          
            </style>
<div class="ui">
 <nav class="navbar title" id="nav">
  <h3 id="title">Page Title </h3>
 </nav>
 <vaadin-horizontal-layout theme="spacing" id="column-layout" style="width: 100%; height: 100%;"></vaadin-horizontal-layout>
</div>
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
