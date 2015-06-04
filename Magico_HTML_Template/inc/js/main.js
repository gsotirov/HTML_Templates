(function($) {
	$(document).ready(function() {
		
		$(window).scroll(function() {
		    if ($(window).scrollTop() > 400) {
		        $("a[href='#top']").fadeIn('slow');
		    } else {
		        $("a[href='#top']").fadeOut('slow')
		    }
		});

		$("a[href='#top']").click(function() {
		    $("html, body").animate({ scrollTop: 0 }, "slow");
		    return false;
		});
	});
})(jQuery);