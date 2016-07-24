

var express = require('express');
var http = require('http');
var httpRequest = require('request');

var app = express();

app.use(express.static(__dirname + '/wwwroot'));

app.get('/isbnSearch', function (request, response) 
	httpRequest('http://isbndb.com/api/v2/json/[your-api-key]/book/');
	response.setHeader('ContentType','application/json');
	response.send();
});

app.listen(8080, function () {
	console.log('Server started');
});