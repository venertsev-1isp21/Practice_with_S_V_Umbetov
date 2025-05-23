let http = require('http');
let fs = require('fs');
let path = require('path');

function onRequest(req, res) {
    let file_path = '.' + (req.url === '/' ? '/index.html' : req.url);
    
    file_path = path.normalize(file_path);

    let ext = path.extname(file_path);
    let content_type = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css',
        '.js': 'application/javascript'
    }[ext] || 'text/plain';

    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': content_type });
            res.end(data);
        }
    });
}

let server = http.createServer(onRequest);
server.listen(3000, '0.0.0.0');
