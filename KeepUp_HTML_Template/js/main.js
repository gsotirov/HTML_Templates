(function($) {
	var main = function() {

	    $('.dropdown-toggle').click(function() {
	        $(this).parent().find('.dropdown-menu').toggle();
	    });
	    $('.settings-toggle').click(function(e) {
	        e.preventDefault();
	        $('.settings').toggleClass('visible');
	    });
	}

	$(document).ready(function() {
	    main();
	});
})(jQuery);