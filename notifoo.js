/* notifoo.js
 * Basic customizable notification plugin v1.0.0
 * Copyright (c) 2015 Mikele Shtembari - github.com/mikeleshtembari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 * Date: 2015.12.23
 */

var notifyIndex = 0;
var notify = '';

(function ($) {
	$.fn.notifoo = function(options) {
		// default options
		var settings = $.extend({
			typeNotify: 'info',
			timer: 2000,
			animation: 'slide',
			position: 'right'
		}, options);

		$(function () {
			// if the main div is not there, add it
			if (!($('#notifoo--area').length))
				$('body').append('<div id="notifoo--area"></div>');
		});

		this.click(function () {
			var notify = '<div id="notify' + notifyIndex + '" class="notifoo--base">' + $(this).attr('notifoo') + '</div>';
			$('#notifoo--area').removeClass().addClass('notifoo--position-' + settings.position).append(notify);
			if (settings.animation === 'slide')
				$('#notify' + (notifyIndex)).addClass('notifoo--type-' + settings.typeNotify).delay(settings.timer).slideUp();
			if (settings.animation === 'fade')
				$('#notify' + (notifyIndex)).addClass('notifoo--type-' + settings.typeNotify).delay(settings.timer).fadeOut();
			setTimeout(function () { $('.notifoo--base:hidden').remove(); }, settings.timer + 2000);
			notifyIndex++;
		});
		return this;
	};
}(jQuery));
