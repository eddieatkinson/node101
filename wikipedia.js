var http = require('http');
var fs = require('fs');
var request = require('request');

function renderHomePage(){
	var wikiHomeHTML = fs.readFileSync('wiki.html');
	return wikiHomeHTML;
}

function renderCSS(){
	var wikiHomeCSS = fs.readFileSync('wiki-styles.css');
	return wikiHomeCSS;
}

function renderJS(){
	var wikiHomeJS = fs.readFileSync('wiki-scripts.js');
	return wikiHomeJS;
}

var server = http.createServer((req, res)=>{
	console.log(req.url);
	if(req.url === '/'){
		var wikiHome = renderHomePage();
		res.writeHead(200, {'content-type': 'text/html'});
		res.end(wikiHome);
	}else if(req.url === '/wiki-styles.css'){
		var wikiCSS = renderCSS();
		res.writeHead(200, {'content-type': 'text/css'});
		res.end(wikiCSS);
	}else if(req.url === '/wiki-scripts.js'){
		var wikiJS = renderJS();
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.end(wikiJS);
	}else if(req.url === '/forbidden'){
		res.writeHead(403, {'content-type': 'text/html'});
		res.end('<h1>403 error</h1><h1 style="font-size:50">GET OUT!!!</h1>');
	}else{
		res.writeHead(404, {'content-type': 'text/html'});
		res.end('Uh ohhh. What did you do!?');
	}
});

server.listen(8002);