$(function(){
	$('#slide img:eq(0)').addClass("ativo").show();
	var texto = $(".ativo").attr("alt");
	$('#slide').prepend("<a href="+"noticias.html"+">"+"<p>"+texto+"</p>"+"</a>");
	//"Slide" é o nome da função que vai gerar as transicões de imagem e texto
	setInterval(slide,5000);
	
	function slide(){
		if($('.ativo').next().size()){
			$('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
		}else{
			$('.ativo').fadeOut().removeClass("ativo");
			$('#slide img:eq(0)').fadeIn().addClass("ativo");
		}

		//Movimentação do texto
		var texto = $(".ativo").attr("alt");
		$('#slide a p').hide().html(texto).delay(500).fadeIn();
	};

});