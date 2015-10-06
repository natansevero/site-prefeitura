// JQuery para efeito de Scroll do Menu Principal
$(window).scroll(function(){
	/* O ".scrollTop" retorna o valor do topo do rolamento no momento */
	var top = $(window).scrollTop();
	var nav = $('nav');

	if(top >= 60) {
		nav.addClass("menu-fixo");
	} else {
		nav.removeClass("menu-fixo");
	}
})