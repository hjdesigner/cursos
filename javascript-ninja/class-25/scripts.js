(function(){
  'use strict';

  function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
  }

  function handleClick(event){
    event.preventDefault();
    alert('clicou no link!');
  }

  on('[data-js="link"]', 'click', handleClick);

  on('[data-js="div"]', 'click', function (event) {
    event.preventDefault();
    alert('clicou no div!');
  });

  on('[data-js="span"]', 'click', function (event) {
    event.preventDefault();
    alert('clicou no span!');
  });

  /* document.querySelector('[data-js="input"]').addEventListener('input', function(){
    console.log(this.value);
  }); */

  document.querySelector('[data-js="input"]').addEventListener('keydown', function () {
    console.log(this.value);
  });

  document.querySelector('[data-js="select"]').addEventListener('change', function(){
    console.log(this.value);
    document.querySelector('[data-js="input"]').value = this.value;
  });


})();