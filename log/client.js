const http = require("http");
const timers = requirer("timeres");

timers.setInterval(() => {
	http.request({
		host: '150.162.9.160',
		port: 7010,
		path: '/logs',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}, (response) => {
		response.end(JSON.stringify({
			message: 'Log'
		}));
	});
}, 60000);
