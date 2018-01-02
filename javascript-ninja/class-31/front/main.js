(function(){
  'use strict';

  /* var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/henrique');
  ajax.send();

  ajax.addEventListener('readystatechange', function(e) {
    if( ajax.readyState === 4 ) {
      console.log(ajax.responseText, ajax.status);
    }
  }, false); */

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type', 'application/xwww-form-urlencoded');
  ajax.send('username=roberto&age=32');
  console.log('Cadastrado usuário...');
  ajax.onreadystatechange = function () {
    if(ajax.readyState === 4){
      console.log('Usuário cadastrado!');
    }
  }
  
})();