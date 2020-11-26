import { Ibstrup } from './ibstrup/ib.js';
Ibstrup.getInstances();
let button = document.getElementById('ibbtn');
button.onclick = function(){
    Ibstrup.Navigate("page2");
}