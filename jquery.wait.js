(function($) {
	
	$.fn.wait = function(time, callback) {
		var target = this;
		
		target.queue(function() {
			window.setTimeout(
				function() {
					target.dequeue();
				},
				time
			);
		});
		
		return this;
	}
	
})(jQuery);