import _ from 'lodash';

function buildHelloWorldDiv() {

    const element = document.getElementById('hello_world');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'World', 'with', 'Lodash', '!'], ' ');
  
    return element;
  }
  
  document.body.appendChild(buildHelloWorldDiv());