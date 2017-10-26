var fs = require('fs');

const args = process.argv;
var fileContents = fs.readFileSync(args[2], 'utf8', (err, data)=>{
	if(err) throw err;
	var dataArray = data.split('o');
	return typeof(dataArray);
});

console.log(typeof(fileContents));