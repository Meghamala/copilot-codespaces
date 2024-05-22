// create web server
// create a web server that listens on port 3000 and serves the comments.js file to the client. Use the createServer method from the http module. The fs module will be needed to read the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.js', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running...');
});

