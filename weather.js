// http is part of node core. We don't have to get it. It's built in, we just have to ask for it.
var http = require('http');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

// The request module is NOT part of core. We had to npm install it because node,
// by default, will look in the node_modules folder for it. If it's not there, you
// have to specify where it is.
var request = require('request');

var weatherAsData = "";

request.get(weatherUrl, (error, response, weatherData)=>{
	console.log(JSON.parse(weatherData).name);
});

// http module has a "get" method that takes 2 args
// 1. Where
// 2. Code to run when back (with the data)
// var request = http.get(weatherUrl, (theResponse)=>{
// 	console.log(theResponse.statusCode);
// 	theResponse.on('data', (chunkOfData)=>{
// 		// console.log(chunkOfData);
// 		weatherAsData += chunkOfData;
// 	});
// 	theResponse.on('end', ()=>{
// 		console.log(weatherAsData);
// 	});
// });