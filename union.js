function union(array1, array2){
	array3 = array1.concat(array2);
	array3.sort(function(a, b){
		return a - b;
	});
	console.log(array3);

}