(function($) {

	$(document).ready(function() {

		$('#da-slider').cslider({
            current     : 0,
            bgincrement : 0,
            autoplay    : true,
            interval    : 8000
        });

        $(window).scroll(function(){

        	if($(window).scrollTop() > 200){
        		$("#main-menu-fixed").fadeIn("fast")
        	}
        	else {
        		$("#main-menu-fixed").fadeOut("fast")
        	}
    	});
	});

})(jQuery);