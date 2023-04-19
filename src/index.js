import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import text from './data.json';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  // data
  console.log(text);
  //print
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console2!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.getElementById("main").appendChild(component());