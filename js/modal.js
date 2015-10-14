$(function(){
	// Evento para cada imagem
	$('#foto1').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto1');
	});

	$('#foto2').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto2');
	});

	$('#foto3').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto3');
	});

	$('#foto4').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto4');
	});

	$('#foto5').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto5');
	});

	$('#foto6').click(function(){
		$('#modal').fadeIn(500);
		$('div.modal-box').addClass('foto6');
	});

	// Evento Fechar
	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto1');
	});

	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto2');
	});

	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto3');
	});

	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto4');
	});

	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto5');
	});

	$('.fechar, #modal').click(function(event){
		if (event.target !== this) {
			return;
		}

		$('#modal').fadeOut(500);
		$('div.modal-box').removeClass('foto6');
	});
});