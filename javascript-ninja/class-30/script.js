(function(){
  'use strict';

  var div = document.querySelector('[data-js="main"]');
  var div2 = document.querySelector('[data-js="main2"]');
  var texteara = document.querySelector('[data-js="textearea"]');
  var form = document.querySelector('[data-js="form"]');


  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  var year = 2015;
  var month = 7;
  var day = 7;
  var hour = 10;
  var min = 10;
  var sec = 0;
  var milliseconds = 0;
  var date = new Date(year, month, day, hour, min, sec, milliseconds);

  // div.innerHTML = '<h2>Subistituindo todo conteudo do main</h2>'
  // div.innerHTML += '<h2>adicionando um conteudo a mais</h2>'

  var h2 = document.createElement('h2');
  h2.textContent = 'titulo 2';
  div.appendChild(h2);


  form.addEventListener('submit', function(e) {
    e.preventDefault();
    div2.innerHTML = texteara.value;
  }, false)


  console.log(div.innerHTML);
  console.log(date);


})();