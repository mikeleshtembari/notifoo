# Notifoo v1.0.0
###A basic on-click notification plugin for your website
* You can customize it easily, or add other classes 'n stuff
* Made with HTML, CSS, jQuery

###License
Released under the MIT license - http://opensource.org/licenses/MIT

###Live demo
Go at http://mikeleshtembari.github.io/notifoo/  
or at http://mikele.xyz/notifoo.html

###Installation
* Copy `notifoo.js` and `notifoo.css` in your directory
* Include jQuery first, then these 2 files in the html markup
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="notifoo.css">
<script src="notifoo.js"></script>
```
* The html markup:
```html
	<button id="error" notifoo="There was an error">Error</button>
```
* **The content of the notification** box is the html tag attribute `**notifoo="the message"**`, on whose click event you call a notification
* Calling the plugin (best in the footer section)
```javascript
	// default
	$('#error').notifoo();

	// with options
	$('#error').notifoo({
		animation: 'slide',
		typeNotify: 'error',
		position: 'right',
		timer: 5000
	});
```
###All plugin options:
```javascript
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

###Examples
Check the live demo for many examples:  
Go at http://mikeleshtembari.github.io/notifoo/  
or at http://mikele.xyz/notifoo.html

###Known issues
*

###Version 1.0.0
* Initial release
