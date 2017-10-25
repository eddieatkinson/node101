// http is part of node core. We don't have to get it. It's built in, we just have to ask for it.
var http = require('http');
// fs = file system - also built in
// fs gives node access to THIS computer's file system.
var fs = require('fs');

function renderHomePage(){
	var theHTMLToGet = fs.readFileSync('homePage.html');
	return theHTMLToGet;
}

function renderScripts(){
	var jsToGet = fs.readFileSync('scripts.js');
	return jsToGet;
}

var server = http.createServer((req, res)=>{
	console.log(req.url); // Will print off the requested url MINUS the host

	if(req.url === '/'){
		// User wants the homepage
		var homePageHTML = renderHomePage();
		res.writeHead(200, {'content-type': 'text/html'});
		res.end(homePageHTML);
	}else if(req.url === '/scripts.js'){
		var jsContents = renderScripts();
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.end(jsContents);
	}else{
		res.writeHead(404,{'content-type':'text/html'});
		res.end('<h1>Sorry, this page does not exist</h1>');
	}
	res.writeHead(200, {'content-type': 'text/html'});
	res.end('<h1>Sanity check</h1>'); // Instead of res.write, we can put it in the hang-up function.
});

// Tell the server we created with http.createServer to losten to port 8001.
// Whenever someone makes a request via HTTP to this port on THIS computer,
// the function/callback will fire with the req and res objects.
server.listen(8001);
console.log("Server is listening for HTTP traffic on port 8001...");