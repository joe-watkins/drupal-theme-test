/*!
 * (v) Compact labels plugin
 * Takes one option: labelOpacity [default: true] set to false to disable label opacity change on empty input focus
 */
(function($){$.fn.compactize=function(options){var defaults={labelOpacity:true};options=$.extend(defaults,options);return this.each(function(){var label=$(this),input=$('#'+label.attr('for'));input.focus(function(){if(options.labelOpacity){if(input.val()===''){label.css('opacity','0.5');}}else{label.hide();}});if(options.labelOpacity){input.keydown(function(){label.hide();label.css('opacity',1);});} input.blur(function(){if(input.val()===''){label.show();} if(options.labelOpacity){label.css('opacity',1);}});window.setTimeout(function(){label.toggle(input.val()==='');},50);});};})(jQuery);
