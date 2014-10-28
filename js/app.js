$(function () {
	$('#header-icon').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('with-sidebar');
	});

	$('#app-cache').click(function() {		
		$('body').removeClass('with-sidebar');
	});
});