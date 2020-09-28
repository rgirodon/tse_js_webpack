import _ from 'lodash';

function buildHelloWorldDiv() {

    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'World', '!'], ' ');
  
    return element;
  }
  
  document.body.appendChild(buildHelloWorldDiv());