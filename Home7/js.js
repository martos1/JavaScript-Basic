addEventListener('load', function(){
	var btn = document.getElementById('btn');
	function stop(e){
		e.preventDefault();
		return false;
	}
	function calk1() {
		var num = document.getElementById('num');
		num = num.value;
		var first = document.getElementById('first');
		var firstValue = first.options[first.selectedIndex].value;
		var second = document.getElementById('second');
		var secondValue = second.options[second.selectedIndex].value;
		var convert = 2.20462262;
		if(firstValue < secondValue){
			num *= convert;
		} else if (firstValue > secondValue){
			num /= convert;
		}
		document.getElementById('res').innerHTML =  num;
	}
	btn.addEventListener('click', stop, false);
	btn.addEventListener('click', calk1, false);
}, false);
