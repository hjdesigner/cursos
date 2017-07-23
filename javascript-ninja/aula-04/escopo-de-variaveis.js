/*
Escopo de variável é o local aonde vc declara a variavel

- Quando declaramos variaveis fora da função esse variável 
esta sendo declarada de forma global

- Quando declamos dentro de uma função esse variável é
declarada local.

- Function cria escopo local

- sempre usar a palavra chave var

- Argumentos de funções são declarados local;

*/

var myvar = 1;
myvar //1 - global

function myFunction(){
    return myvar;
}
myFunction() //1 - global


function otherFunction(){
    var otherVar = true;
    return otherVar;
}
otherFunction() //true local;
otherVar //otherVar is not defined

function outraFuncao(a, b, v){
    return a;
}