const http = require('http');
const url = require('url');

function get(request, response) {
	console.log('GET /logs');
}

function save() {
	console.log('POST /logs');
}

http.createServer((request, response) => {
	var uri = url.parse(request.url, true);
	var resource = uri.pathname;
	var method = request.method;
	var type = request.headers['content-type'];
	if (resource == 'logs') {
		if (method == 'GET') {
			get();
		} else if (method == 'POST') {
			if (type == 'application/json') {
				save()
			} else {
				response.statusCode = 415;
				response.setHeader("Content-Type", "text/plain");
				response.end('Unsupported media type');
			}
		} else {
			response.statusCode = 405;
			response.setHeader("Content-Type", "text/plain");
			response.end('Method not allowed');
		}
	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/plain");
		response.end('Not found');
	}
}).listen(7010);
