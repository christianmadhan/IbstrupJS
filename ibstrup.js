// Singleton object 
var Ibstrup = (function () {
  var ib_instance;
  function createInstance() {
    var ib_object = new Object('Ibstrup instantiated');
    return ib_object;
  }
  return {
    getIbInstance: function () {
      if (!ib_instance) {
        ib_instance = createInstance;
      }
      return ib_instance;
    }
  }
})();

let expression = document.querySelector('name');
console.log(expression);

// Web Components

// create constant colors which will be used in every components.
const colors = {
  BLUE: '',
  BLUE_HOVER: '',
}

class Button extends HTMLElement {
  connectedCallback() {

    const template_button = document.createElement('template');
    let button_color = "blue";

    if (!this.shadowRoot) {
      let size = this.getAttribute("size");
      let color = this.getAttribute("color");
      let boxshadow = this.getAttribute("boxshadow");
      switch (size) {
        case 'large':
          button_color = "pink";
          break;

        default:
          break;
      }

      template_button.innerHTML = `
            <style> 
            @import url("https://fonts.googleapis.com/css?family=Rubik:700&display=swap");
            * {
              box-sizing: border-box;
            }
            *::before, *::after {
              box-sizing: border-box;
            }
            
            button {
              position: relative;
              display: inline-block;
              cursor: pointer;
              outline: none;
              border: 0;
              vertical-align: middle;
              text-decoration: none;
              font-size: inherit;
              font-family: inherit;
            }
            button.learn-more {
              font-weight: 600;
              color: #382b22;
              text-transform: uppercase;
              padding: 1.25em 2em;
              background: #fff0f0;
              border: 2px solid #b18597;
              border-radius: 0.75em;
              transform-style: preserve-3d;
              transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
            }
            button.learn-more::before {
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: #f9c4d2;
              border-radius: inherit;
              box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
              transform: translate3d(0, 0.35em, -1em);
              transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
            }
            button.learn-more:hover {
              background: #ffe9e9;
              transform: translate(0, 0.25em);
            }
            button.learn-more:hover::before {
              box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
              transform: translate3d(0, 0.5em, -1em);
            }
            button.learn-more:active {
              background: #ffe9e9;
              transform: translate(0em, 0.75em);
            }
            button.learn-more:active::before {
              box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
              transform: translate3d(0, 0, -1em);
            }
            </style>
            <button class="learn-more">Learn more</button>
            `;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_button.content.cloneNode(true));
    }
  }


}


const template_card = document.createElement('template');
template_card.innerHTML = `<div>Custom card </div>`;

class Card extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_card.content.cloneNode(true));
    }
  }
}


const template_grid = document.createElement('template');
template_grid.innerHTML = "<slot/>"
class Grid extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.style.display = "grid";
      this.style.gap = "1em";
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_grid.content.cloneNode(true));
    }
  }
}

const register = function () { customElements.define('ib-grid', Grid); customElements.define('ib-button', Button); customElements.define('ib-card', Card); };
window.WebComponents ? window.WebComponents.waitFor(register) : register();
