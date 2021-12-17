import $ from 'jquery';
import _ from 'lodash';

function buildHelloWorldDiv() {

  let message = _.join(['Bonjour', 'TSE', 'with', 'Lodash', '!'], ' ');

  $('#hello_world').text(message);
}

$(function() {
  buildHelloWorldDiv();
});