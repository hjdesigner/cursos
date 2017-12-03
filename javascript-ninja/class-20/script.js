(function(win, doc) {
  'use strict';
  /* var name = prompt('Qual o seu nome?');
  if(name)
    console.log('Olá', name);
  else
    console.log('não respondeu');

  var del = confirm('Deseja realmente excluir?');
  if(del)
    console.log('Excluir com sucesso!', del); */

  console.log(doc.getElementsByClassName('my-link'));
  console.log(doc.getElementsByName('username'));

  var $inputs = doc.querySelectorAll('.input');
  console.log($inputs);

  var inputUsername = doc.querySelector('.name');
  var inputPassword = doc.querySelector('.pass');

  console.log(inputUsername.value, inputPassword.value);

  inputUsername.value = 'Henrique Melanda';
  inputPassword.value = 'sadjf;asdnf;lansdl;fnas;ldnfadsf';

  var button = doc.querySelector('#button');

  button.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click no botão');
  },false);

  inputUsername.addEventListener('click', function(){
    alert('click');
  });

})(window, document);