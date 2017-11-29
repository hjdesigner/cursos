(function(){
  //Use strict não deixar passar nada como esclopo global
  //Ele mostra undefined em vez de deixar escapar para o esclopo global
  'use strict'
  var myName = 'Henrique Melanda';
  console.log(myName);
  var obj = {
    prop1: {
      prop2: {
        prop3:{
          prop31: 'prop31',
          prop32: 'prop32',
          prop33: 'prop33',
        }
      }
    }
  }
  console.log(obj.prop1.prop2.prop3);
  //Com o uso do strict não pode rodar esse codigo a baixo
  /* with (obj.prop1.prop2.prop3){
    console.log(prop31, prop32, prop33);
  } */
  function Person ( name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  console.log(new Person('Henrque', 'Melanda', 26));

  var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }
  var myVar = 2;
  console.log(delete obj2.prop1, obj2);
  //No modo strict ele não deixa deletar o objeto e da um sYNTAXeRROR
  //Sem ele só aparece o false
  //console.log(delete yVar);

  //Com o uso strict não deixa declarar duas propriedade com o mesmo nome
  //Função tem que ter nome diferentes

  console.log('Henrique'.length);
  console.log('Henrique'.charAt(0));
  console.log('Henrique'[2]);
  console.log('Henrique'.concat(' Rodrigues', ' menu', ' nome', ' é'));
  console.log('Henrique'.indexOf('q'));
  console.log('Henrique'.replace('que','kue'));
  console.log('Henrique'.slice(3, 5));
  console.log('Henrique'.split('q'));
  var name = 'Henrique';
  var arrHen = name.split('q');
  console.log(arrHen.join('q'));
  console.log(name.substring(2, 5));
  console.log(name.toLocaleLowerCase());
  console.log(name.toUpperCase());
  console.log(name.charAt(0).toUpperCase() + name.slice(1));
})();
