(function($) {

	$.fn.validateText = function(options) 
	{
		var settings = $.extend({
            pattern: "^[A-Z][a-z]*$",
        }, options );

		var pattern = new RegExp(settings.pattern);

		$(this).change(function ()
		{
			if (pattern.test(this.value))
			{
				if($(this).hasClass("error"))
				{
					$(this).removeClass("error");
				}
			}
			else
			{
				$(this).addClass("error");
			}
		})
	};

})(jQuery);