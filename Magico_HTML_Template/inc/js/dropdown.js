(function ($) {

	$.fn.dropit = function() {
		var $this = $(this);
		$this.find('li').hover(function(e) {
			var self = $(this);
			if(self.find('ul')) {
				self.css('position', 'relative');
				self.find('ul').css({
					'position': 'absolute',
					'top': '48px',
					'left': '0',
					'z-index': '10',
					'width': '220px',
					'background': 'url(inc/images/debut_light.png) 0 0',

				});
				self.find('ul').toggle('slow');
				self.find('ul').hover(function() {
					$(this).css('display', 'block');
				});
			}
		});
	}

})(jQuery);