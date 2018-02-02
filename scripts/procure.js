/*
* Configuration and instantiation of ScrollReveal.js
* https://github.com/jlmakes/scrollreveal
*/

'use strict';

(function () {

	var config = {
		opacity : 0,
		delay : 100,
		mobile : true
	};

	window.sr = ScrollReveal();  // instantiate ScrollReveal constructor
	sr.reveal('.fader', config); // pass in target elements and configuration object
})();
