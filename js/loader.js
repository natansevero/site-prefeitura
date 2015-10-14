$(function(){
	$(document).ready(function(){
		$('.loader').delay(500).fadeOut(500);
	});

	$(window).load(function(){
		$('header, nav, section, footer').delay(1000).fadeIn(1000);	
	});
});