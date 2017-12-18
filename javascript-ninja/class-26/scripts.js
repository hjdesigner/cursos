(function(){
  'use strict';
  var main = document.querySelector('.main');
  var mainContent = document.querySelector('.main-content');
  var mainHeader = document.querySelector('.main-header');
  var firstText = mainContent.firstChild;
  var mainFooter = document.querySelector('.main-footer');
  console.log(main.parentNode);
  console.log(main.childNodes);
  console.log(main.firstChild);
  console.log(main.lastChild);
  console.log(main.nextSibling);
  console.log(main.previousSibling);
  console.log(main.nodeType);
  console.log(main.firstChild.nodeType);
  console.log(main.childNodes);
  console.log(main.nodeName);
  console.log(main.children);
  console.log(main.firstElementChild);
  console.log(main.lastElementChild);
  console.log(main.nextElementSibling);
  console.log(main.children.length);
  console.log(main.childElementCount);
  console.log(main.hasAttribute('class'));
  console.log(main.firstElementChild.firstElementChild.hasAttribute('class'));
  //console.log(main.appendChild(mainHeader));
  console.log(mainContent.insertBefore(mainHeader, firstText));
  var cloneMainHeader = mainHeader.cloneNode(true);
  mainContent.appendChild(cloneMainHeader);
  console.log(document.querySelectorAll('.main-header').length);
  var h1 = mainHeader.firstElementChild;
  console.log(h1.hasChildNodes());
  //mainHeader.removeChild(h1);
  //main.replaceChild(cloneMainHeader, mainFooter);
  var newText = document.createTextNode('opa!');
  var newP = document.createElement('p');
  newP.appendChild(newText);
  
  main.appendChild(newText);
  main.appendChild(newP);

  var main2 = document.querySelector('.main-2');

  console.log( parseFloat(main2.getAttribute('data-number-1')) + parseFloat(main2.getAttribute('data-number-2')));

  console.log(main2.setAttribute('data-number-2', '4'));
  console.log(main2.setAttribute('data-number-3', '3'));


  var fragment = document.createDocumentFragment();
  var childP = document.createElement('p');
  var textChildP = document.createTextNode('texto da tag P!');
  childP.appendChild(textChildP);
  fragment.appendChild(childP);

  document.body.appendChild(fragment);
})();