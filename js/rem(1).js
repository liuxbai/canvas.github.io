(function(){
	$.fn.extend({
		"htmlWidth" : function(options){
			var clientWidth = $(window).width();
			$('html').css({
				'font-size' : 100 * (clientWidth / options)
			})
			$(window).resize(function(){
				return $.fn.htmlWidth(options);
			})
		}
	})
})(jQuery)