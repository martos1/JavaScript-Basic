addEventListener('load', function(){
	var btn = document.getElementById('btn');
	function stop(e){
		e.preventDefault();
		return false;
	}
	var countries = document.getElementById('countries');
	function selectCount() {
		var countries = document.getElementById('countries');
		var counValue = countries.options[countries.selectedIndex].value;
		if(counValue == 0){
			document.getElementById('otherCount').style.display = 'block';
		} else {
			document.getElementById('otherCount').style.display = 'none';
		}
		return counValue;
	}
	function submit() {
		var name = document.getElementById('name');
		var nameValue = String.trim(name.value);
		if(nameValue.length < 1){
			name.style.backgroundColor = 'red';
			document.getElementById('errorName').style.display = 'inline';
		} else {
			name.style.backgroundColor = 'white';
			document.getElementById('errorName').style.display = 'none';
		}
		var email = document.getElementById('email');
		var emailValue = String.trim(email.value);
		if(emailValue.length < 1){
			email.style.backgroundColor = 'red';
			document.getElementById('errorEmail').style.display = 'inline';
		} else {
			email.style.backgroundColor = 'white';
			document.getElementById('errorEmail').style.display = 'none';
		}
		var pass = document.getElementById('password');
		var passValue = String.trim(pass.value);
		if(passValue.length < 1){
			pass.style.backgroundColor = 'red';
			document.getElementById('errorPass').style.display = 'inline';
		} else {
			pass.style.backgroundColor = 'white';
			document.getElementById('errorPass').style.display = 'none';
		}
		var other = document.getElementById('other');
		var otherValue = String.trim(other.value);
		if( selectCount() == 0 && otherValue.length < 1){
			other.style.backgroundColor = 'red';
			document.getElementById('errorOther').style.display = 'inline';
		} else {
			other.style.backgroundColor = 'white';
			document.getElementById('errorOther').style.display = 'none';
			otherValue = '';
		}
	}
	//mozilla not support focusin and focusout 
	countries.addEventListener('change', selectCount, false);
	btn.addEventListener('click', stop, false);
	btn.addEventListener('click', submit, false);
}, false);
