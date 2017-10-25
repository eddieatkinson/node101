var http = require('http');
var fs = require('fs');

function renderWeatherHome(){
	return fs.readFileSync('weather-home.html');
}

function renderConfig(){
	return fs.readFileSync('config.js');
}

function renderScripts(){
	return fs.readFileSync('scripts.js');
}

var server = http.createServer((req, res)=>{
	console.log(req.url);

	if(req.url === '/'){
		var weatherHTML = renderWeatherHome();
		res.writeHead(200, {'content-type': 'text/html'});
		res.end(weatherHTML);
	}else if(req.url === '/config.js'){
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.end();
	}else if(req.url === '/scripts.js'){
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.end();
	}else{
		res.writeHead(404, {'content-type': 'text/html'});
		res.end('Uh ohh..')
	}
});

server.listen(8003);