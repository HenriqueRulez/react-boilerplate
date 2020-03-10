// import './style.css';
// import Icon from './imgs/wb.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('p');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  element.innerHTML = 'dadasdasd';
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
