(function(){
	function hideById(id) {
		var el = document.getElementById(id);
		if (el && el.style) {
			el.style.display = 'none';
		}
	}

	// facebook
	hideById('headerArea');
})();
