const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log("request was me: " + req.url);
	res.write(200, { "Content-Type": "text/plain" });
	res.end("feed me popcorn");
});

server.listen(5050, "127.0.0.1");
console.log("Im listening");
