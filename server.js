// Static server for App Vẽ Mạch Điện (phone version, single-file build).
// No dependencies — uses only Node's built-in http/fs/path modules.
// Railway sets PORT automatically; defaults to 8080 locally.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || '8080', 10);
const INDEX = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  // Single-page app: every path serves index.html.
  fs.readFile(INDEX, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('index.html not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`App Ve Mach Dien listening on port ${PORT}`);
});
