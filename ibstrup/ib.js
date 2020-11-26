import {button } from './components/button.js';

// Singleton object 
var Ibstrup = (function () {
  var ib_instance;
  var routes = [];
  function createInstance() {
    var ib_object = new Object('Ibstrup instantiated');
    var routes_object = [];
    return ib_object, routes_object;
    
  }
  return {
    Make: (word) => {
      },
    GetDataAsync: async ()  => {
    },
    Navigate: (routeName) => {

    },
    Navigate: (routeName) => {
      fetch(`${routeName}.html`)
      .then(data => console.log(data));//window.location.href = data.url);
    },
    getInstances: () => {
      if (!ib_instance) {
        ib_instance = createInstance;
      }
      return ib_instance;
    }
  };

})();
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

      template_button.innerHTML = button(color);

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template_button.content.cloneNode(true));
    }
  }


}


const template_card = document.createElement('template');
template_card.innerHTML = `
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
</head>
<body>

<h2>Card</h2>

<div class="card">
  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>

`;

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

export { Ibstrup }