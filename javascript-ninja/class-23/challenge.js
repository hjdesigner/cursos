(function(win, doc){
  'use strict';

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.
  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initalize(){
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function (button) {
      button.addEventListener('click', handleClickNumber, false);
    });

    Array.prototype.forEach.call($buttonsOperations, function (button) {
      button.addEventListener('click', handleClickOperation, false);
    });

    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number){
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();

    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIsAnOperator(string) {
    if (isLastItemAnOperation(string))
      return string.slice(0, -1);
    
    return string;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function doOperation(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
        return (Number(firstValue) + Number(lastValue));
      case '-':
        return (Number(firstValue) - Number(lastValue));
      case 'x':
        return (Number(firstValue) * Number(lastValue));
      case '÷':
        return (Number(firstValue) / Number(lastValue));
    }
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }
  
  function handleClickEqual() {
    $visor.value = removeLastItemIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(calculateAllValues);
  }

  
  initalize();
})(window, document);