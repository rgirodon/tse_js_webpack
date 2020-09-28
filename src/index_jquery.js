import $ from 'jquery';

function buildHelloWorldDiv() {

  $('#hello_world').text('Hello World with JQuery !');
}

$(function() {
  buildHelloWorldDiv();
});