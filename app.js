const http = require('http');
const os = require('os');

console.log("Test server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Container Hostname IS " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
