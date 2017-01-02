var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');

function atualizaTamanhoFrase(){
	var frase = $('.frase').text();
	var numPalavras = frase.split(' ').length;
	var tamanhoFrase = $('#tamanhoFrase');
	tamanhoFrase.text(numPalavras)
}

function inicializaContadores(){
	campo.on('input', function(event) {
		event.preventDefault();
		/* Act on the event */
		var conteudo = campo.val();
		var qtdPalavras = conteudo.split(/\S+/).length - 1;
		var qtdCaracteres = conteudo.length;
		$('#contador-palavras').text(qtdPalavras);
		$('#contador-caracteres').text(qtdCaracteres);
	});	
}

function inicializaCronometro(){
	var tempoRestante = $('#tempo-digitacao').text();
	campo.one('focus', function(event) {
		event.preventDefault();
		/* Act on the event */
		var cronometroID = setInterval(function(){
			tempoRestante--;
			$('#tempo-digitacao').text(tempoRestante);
			if(tempoRestante < 1){
				clearInterval(cronometroID);
				finalizaJogo();
			}
		},1000);
	});	
}
function finalizaJogo(){
	campo.attr('disabled', true);
	campo.addClass('campo-desativado');
	inserePlacar();	
}

function reiniciaJogo(){
	campo.attr('disabled', false);
	campo.val('');
	$('#contador-palavras').text('0');
	$('#contador-caracteres').text('0');
	$('#tempo-digitacao').text(tempoInicial);
	inicializaCronometro();
	campo.removeClass('campo-desativado');
	campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inserePlacar(){
	var corpoTabela = $('.placar').find('tbody');
	var usuario = "Henrique Rodrigues";
	var numPalavras = $('#contador-palavras').text();

	var linha = novaLinha(usuario,numPalavras);

	linha.find(".botao-remover").click(removeLinha);

	corpoTabela.prepend(linha);
	$('.placar').slideDown(600);

	scrollPlacar();
}

function scrollPlacar(){
	var posicaoPlacar = $('.placar').offset().top;
	$('body').animate({
		scrollTop: posicaoPlacar + 'px'
	},1000);
}

function novaLinha(usuario,numPalavras){
	var linha = $('<tr>');
	var colunaUsuario = $('<td>').text(usuario);
	var colunaPalavras = $('<td>').text(numPalavras);
	var colunaRemover = $('<td>');
	var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}

$('.botao-remover').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var linha = $(this).parent().parent();
	linha.fadeOut(1000);
	setTimeout(function(){
		linha.remove();		
	},1000);
});

function mostraPlacar(){
	$('.placar').stop().slideToggle(600);
}

$('#botao-placar').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	mostraPlacar();
});

$(document).ready(function($) {
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	$('#botao-reiniciar').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		reiniciaJogo();
	});
});