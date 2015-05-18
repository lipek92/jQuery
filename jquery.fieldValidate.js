(function($) {
	
	$.fn.validateTest = function(options) {
 
    var settings = $.extend({
            pattern: "^[a-z]*$",
        }, options );

		var pattern = new RegExp(settings.pattern);

		this.each(function(){
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
			checkInputs(this);
		});
	});
		
		return this;
 
};

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
			checkInputs(this);
		});
		
		return this;
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
			checkInputs(this);
		});
		
		return this;
	};

	var checkInputs = function(obj)
	{		
		var form = $(obj).parents('form');
		var submit = form.find('input[type="submit"]');
		var inputs = form.find('input[type="text"]');
		
		var error;
		$(inputs).each(function()
		{
 			var input = $(this);

 			if (input.hasClass("error"))
 			{
 				error = true;
 			}
		});

		if (error)
		{
			submit.attr('disabled','disabled');
		}
		else
		{
			submit.removeAttr('disabled');
		}
	};

})(jQuery);
