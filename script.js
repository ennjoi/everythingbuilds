$(document).ready(function() {
	$('#everythingbuilds a').hover(
		function() {
			$(this).addClass('everythingbuilds');
		}, 
		function() {
			$(this).removeClass('everythingbuilds');
		}
		);

	$('.footerlinks').hover(
		function() {
			$(this).addClass('activefooterlinks');
		}, 
		function() {
			$(this).removeClass('activefooterlinks');
		}
		);
});