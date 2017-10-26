var fs = require('fs');

const args = process.argv;
var fileContents = fs.readFileSync(args[2], 'utf8', (err, data)=>{
	if(err) throw err;
	return data;
});

var upperCase = fileContents.toUpperCase();
// console.log(typeof(upperCase));
fs.writeFileSync(args[3], upperCase, 'utf8', (err)=>{
	if(err) throw err;
	console.log("File writing complete!");
});