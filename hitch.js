
jQuery.noop = function() {};
$.fn.click = $.fn.on = $.fn.hide = $.fn.show = $.fn.animate = $.fn.css = $.fn.html = $.fn.text = $.fn.attr = jQuery.noop;
$.ajax = $.get = $.post = jQuery.noop;

