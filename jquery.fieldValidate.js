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
			checkInputs();
		});
		
	};

	$.fn.validateEmail = function(options) 
	{
		var settings = $.extend({
            pattern: "[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}",
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
			checkInputs();
		});
		
	};

	var checkInputs = function()
	{
		var error;
		$("input[type=text]").each(function()
		{
 			var input = $(this);

 			if (input.hasClass("error"))
 			{
 				error = true;
 			}
		});

		if (error)
		{
			$('input[type="submit"]').attr('disabled','disabled');
		}
		else
		{
			$('input[type="submit"]').removeAttr('disabled');
		}
	};

})(jQuery);