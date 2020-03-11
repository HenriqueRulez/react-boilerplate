// import './style.css';
// import Icon from './imgs/wb.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('p');
  const btn = document.createElement('button');

  btn.innerHTML = 'Clickss me and check the consoleddadasdasdasdsdadd!';
  btn.onclick = printMe;
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  element.innerHTML = '123';
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
