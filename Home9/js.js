addEventListener('load', function(){
	var img = document.getElementById('img');
	function over(e){
		e.target.style.width = 200 + 'px';
		e.target.style.height = 200 + 'px';
	}
	function out(e){
		e.target.style.width = 100 + 'px';
		e.target.style.height = 100 + 'px';
	}
	img.addEventListener('mouseover', over, false);
	img.addEventListener('mouseout', out, false);
}, false);
