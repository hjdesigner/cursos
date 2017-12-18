(function(){
  'use strict';

  function afterDomContentLoader(){
    var fragment = document.createDocumentFragment();
    var childP = document.createElement('p');
    var textChildP = document.createTextNode('texto da tag P!');
    childP.appendChild(textChildP);
    fragment.appendChild(childP);
  
    document.body.appendChild(fragment);
  }

  function afterWindowLoader(){
    alert('AfterWindowLoad');
  }

  document.addEventListener('DOMContentLoaded', afterDomContentLoader, false);
  window.addEventListener('load', afterWindowLoader, false);

  function is(obj){
    return Array.prototype.toString.call(obj);
  }
  console.log(is([1, 2, 3, 4]));

})();