(function(){
	setTimeout(function(){
		console.log('Running quora.js');
		try {
			document.body.setAttribute('class', document.body.getAttribute('class').replace('signup_wall_prevent_scroll'));
			document.getElementsByClassName('modal_signup_background')[0].parentNode.parentNode.remove();
			Array.prototype.forEach.call(document.getElementsByTagName('a'), function(el){el.removeAttribute('target');});
		} catch (e) {
			//
		}
	}, 1000);
})();
