addEventListener('load', function(){
	var btn = document.getElementById('btn');
	function stop(e){
		e.preventDefault();
		return false;
	}
	function insert() {
		document.getElementsByTagName('tbody')[0].innerHTML += '<tr><td>New Name</td><td>New Age</td></tr>';
	}
	btn.addEventListener('click', stop, false);
	btn.addEventListener('click', insert, false);




}, false);
