addEventListener('load', function(){
	var btn = document.getElementById('btn');
	function stop(e){
		e.preventDefault();
		return false;
	}
	function calk() {
		var radius = document.getElementById('radius').value;
		radius = radius * 1;
		var v = 1.33 * 3.14 * radius * radius * radius;
		document.getElementById('result').value = v;
	}
	btn.addEventListener('click', stop, false);
	btn.addEventListener('click', calk, false);
}, false);
