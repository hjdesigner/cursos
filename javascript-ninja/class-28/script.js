(function(){
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', './data/data.json');

  ajax.send();
  
  console.log('Carregando....');

  ajax.addEventListener('readystatechange', function(){
    if( isRequestOk() ) {
      var data = '';
      try{
        data = JSON.parse(ajax.responseText);
      }
      catch(e){
        data = ajax.responseText;
      }
      console.log(data)
    }
    //console.log('Terminou requisição', ajax.readyState, ajax.status);
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})();