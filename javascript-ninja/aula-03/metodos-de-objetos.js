//função anonima
var myvar  = function(){
    return 'variável myvar';
}
myvar();

var pessoa = { nome: 'henrique', idade: 26, altura: 1.85, peso: 120 };

//Atribuindo métodos
pessoa = { nome: 'henrique', idade: 26, altura: 1.85, peso: 120, sexo: 'masculino' };
pessoa.cor = 'Branco';

//Atribuindo ações
pessoa.andar = function(){
    return 'Pessoa andando';
}
pessoa.andar();


pessoa.aniversario = function(){
    pessoa.idade ++;
}
pessoa.aniversario();

pessoa.sobrenome = 'Melanda'

pessoa.nomeCompleto = function(){
    pessoa.nome + ' ' + pessoa.sobrenome;
}
nomeCompleto();