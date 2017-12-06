(function(win, doc){
  'use strict'
  /* console.log(1);
  for(var i = 1; i < 10; i++){
    console.log(i);
  }
  console.log(11); */

  /* console.log('inicio');
  document.addEventListener('click',function(){
    console.log('clicou no document')
  });
  console.log('fim') */

  console.log('inicio');
  setTimeout(function(){
    console.log('executou setTimeout');
  },1000);
  /* setInterval(function(){
    console.log('executou setInterval');
  },1000); */
  console.log('inicio');
  var $button = doc.querySelector('[data-js="button"]');
  var counter = 0;
  var temporizador;

  function timer(){
    console.log('timer', counter++);
    if( counter > 10)
      return;
    temporizador = setTimeout(timer, 1000);
  }

  timer();

  $button.addEventListener('click', function(){
    clearTimeout(temporizador);
  }, false);

})(window, document);