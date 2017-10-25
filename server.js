// Node is not JS but reads JS.
// You can use it like "$ python NAMEOFFILE" to run some JS, because node reads JS.
// We still have access to all the ative elements.

// var atlTeams = [
// 	'Braves',
// 	'Falcons',
// 	'United',
// 	'Hawks'
// ]
// console.log(atlTeams);

// var atl = {
// 	bball: "Hawks",
// 	football: "Falcons",
// 	soccer: "United",
// 	baseball: "Braves"
// }
// console.log(atl);
// // console.log(window); ... Not defined in node

// Just like Python, there are some modules BUILT IN to node.
// In order to access them, you use require (like import in Python).
var http = require('http'); // 'http' module is built-in to node
// console.log(http); // Note: http is a variable name, which could be anything.

// createServer is a method of the http object.
// It takes 1 argument, the function to run when someone connects via HTTP.
var server = http.createServer((req, res)=>{
	// console.log(req.rawHeaders[0]);
	// res = response = say something back
	// writeHead sets the HTTP headers, 2 args
	// 1. status code
	// 2. mime type
	res.writeHead(200, {'content-type':'text/html'}); // 200 means "okay, we heard you and it makes sense!"
	// res.writeHead(200, {'content-type':'text/text'}); // This will deliver the literal text (with the tags and everything)
	res.write("<h1>Hello, intrepid traveler. This is actually YOUR node server. Have a great day!</h1>");
	res.end(); // Now we hung up
});

// HTTP = 80, so add 2 0s, could be anything higher than 1024.
// You MUST use a port higher than 1024 because everything below belongs to root
console.log("Server is listening for connections on port 8000.");
server.listen(8000)