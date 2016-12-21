var frase = $('.frase').text();
var numPalavras = frase.split(' ').length;
var tamanhoFrase = $('#tamanhoFrase');
tamanhoFrase.text(numPalavras)