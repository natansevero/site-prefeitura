// JQuery para efeito de Scroll do Menu Principal
$(function(){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		var nav = $('nav');
		if(top >= 150) {
			nav.addClass("menu-fixo");
		} else {
			nav.removeClass("menu-fixo");
		};

	});
});