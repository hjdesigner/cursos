(function(){
  var myObject = {
    myProperty: 1,
    init: function init() {
      return this;
    }
  };
  console.log(myObject.init());

  function myFunction() {
    return this;
  }

  console.log(myFunction());

  var newObject = new Object();

  console.log(newObject);

  function MyConstructor(){
    this.prop1 = 'prop1',
    this.prop2 = 'prop2'
  }
  var constructor = new MyConstructor();
  console.log(constructor);
  console.log(constructor.prop1);

  function myFunction3() {
    return arguments;
  }
  console.log(myFunction3( 1, 2));
})();