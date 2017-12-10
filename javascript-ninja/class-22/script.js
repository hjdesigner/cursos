(function(){
  'use strict';

  function myFunction(a, b, c){
    console.log( this.lastName, a, b, c );
  }
  /* var myname = new  myFunction();
  myname.lastName = 'Melanda'; */

  var obj = { lastName: 'Melanda' };
  var obj2 = { lastName: 'Rodrigues'};
  var arr = [1, 2, 3];

  /* console.log(myFunction.length);
  console.log(myFunction.toString());
  console.log( myname ); */

  myFunction.call(obj, 'a', 'b', 'c');
  myFunction.apply(obj2, arr);


  function MyFunction2( name, lastname){
    this.fullName = name + '  ' + lastname;
  }

  var melanda = new MyFunction2('Henrique', ' Melanda');

  console.log( melanda.fullName );


  function MyFunction3(name, lastname) {
    this.name = name;
    this.lastName = lastname;
  }

  MyFunction3.prototype.fullName = function() {
    return this.name + '  ' + this.lastName;
  }

  var rodrigues = new MyFunction3('Henrique', ' Rodrigues');

  console.log(rodrigues.fullName());


  function myFunction4() {
    //console.log(arguments.length);
    Array.prototype.forEach.call(arguments, function(item, index){
      console.log(item)
    });
    var result = Array.prototype.reduce.call(arguments, function(acumulated, actual, index){
      return acumulated + actual;
    });
    console.log(result);
  }

  console.log(myFunction4(1,2,3,4,5,6));

})();