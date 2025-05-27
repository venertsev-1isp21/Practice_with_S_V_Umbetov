let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

function onRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  let filePath = pathname === '/' ? './index.html' :
                 pathname === '/public/product_page.html' ? './public/product_page.html' :
                 '.' + pathname;

  filePath = path.normalize(filePath);

  let ext = path.extname(filePath);
  let CT = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript'
  }[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': CT });
      res.end(data);
    }
  });
}

http.createServer(onRequest).listen(5555, '0.0.0.0');
console.log('SERVER STARTED');