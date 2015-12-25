var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var symbol;
var num = 0;
for(var i = 0; i < arr1.length; i+=1){
	var inum = 0;
	for(var j = 0; j < arr1.length; j+=1){
		if (arr1[i] == arr1[j]){
			inum += 1;
		}
	}
	if (inum > num){
		num = inum;
		symbol = arr1[i];
	}
}
console.log(symbol ,'(', num , 'times )');
