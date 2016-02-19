# Notifoo v1.0.1
###A basic on-click notification plugin for your website
* Show a notification for your on-click events
* You can customize it easily, or extend it
* Made with HTML, CSS, jQuery

###License
Released under the MIT license - http://opensource.org/licenses/MIT

###Live demo
Go at http://mikeleshtembari.github.io/notifoo/

###Installation
* Copy `notifoo.js` and `notifoo.css` in your directory
* Include jQuery first, then these 2 files in the html markup
```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<link rel="stylesheet" type="text/css" href="notifoo.css">
	<script src="notifoo.js"></script>
```
* The html markup (it can be any element that has click event:
```html
	<button id="error">Error</button>
```
* **The content of the notification box is now** in the plugin option, called `contents`. It can be absolutely any HTML code, not just plain text.
* Calling the plugin (best in the footer section)
```javascript
	// default
	$('#error').notifoo();

	// with options
	$('#error').notifoo({
		theContent: 'This is a <strong>bolded</strong> notification',
		animation: 'slide',
		typeNotify: 'error',
		position: 'right',
		timer: 5000
	});
```
###All plugin options:
```javascript
	// string - can be any kind of html markup you'd wish
	theContent: '<div class="hot-choccolate">Drink</div>',

	// string - type of the notification
	typeNotify: 'success', 'error', 'warning', 'info'

	// integer - how long the notification stays, in milliseconds
	timer: 1000, 500, 5000

	// string - animation used to close the notification
	animation: 'slide', 'fade'

	// string - position where it appears
	position: 'left', 'top', 'right'

	// default options:
	typeNotify: 'info',
	timer: 2000,
	animation: 'slide',
	position: 'right'
```
###Extend
You can add a new type of notification, by simply adding a new CSS class  
`notifoo--type-MY_TYPE` and later use the option `typeNotify: MY_TYPE`  
For more, check the example class `.notifoo--type-custom1` in the CSS

###Examples
Check the live demo for many examples:  
Go at http://mikeleshtembari.github.io/notifoo/

###Known issues
* 

###Version 1.0.1
* Removed the content from the class. Now it must be added like another jQuery plugin option. It is better for many reasons this way.

###Version 1.0.0
* Initial release
