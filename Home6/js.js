addEventListener('load', function(){
	var arr = ['3d_001.jpg', '3d_002.jpg', '3d_003.jpg', '3d_004.jpg', '3d_005.jpg']
	var veiw = Math.floor(Math.random()*arr.length);
	document.getElementById('img').innerHTML = '<img src="img/' + arr[veiw] + '">';
}, true);
