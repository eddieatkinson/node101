var fs = require('fs');

const args = process.argv;
var fileContents = fs.readFileSync(args[2], 'utf8', (err, data)=>{
	if(err) throw err;
	return data;
});

var upperCase = fileContents.toUpperCase();
console.log(upperCase);