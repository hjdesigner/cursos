function fraseAleatoria(){
	$('#spinner').toggle();
	$.get('http://localhost:3000/frases',trocaFraseAleatoria)
	.fail(function(){
		$('#erro').toggle();
		setTimeout(function(){
			$('#erro').toggle();
		},2000);
	})
	.always(function(){
		$('#spinner').toggle();		
	});
}
function trocaFraseAleatoria(data){
	var frase = $('.frase');
	var numeroAleatorio = Math.floor(Math.random() * data.length);
	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}
function atualizaTempoInicial(tempo){
 	tempoInicial = tempo;
	$('#tempo-digitacao').text(tempo);
}
$('#botao-frase').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	fraseAleatoria();
});