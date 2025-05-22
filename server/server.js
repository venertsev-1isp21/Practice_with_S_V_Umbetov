var http = require('http');
var fs = require('fs');
var path = require('path');

function onRequest(request, response) {
    if (request.url === '/' || request.url === '/index.html' || request.url === '/scripts/script.js' || request.url === '/styles/style.css') {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('Ошибка сервера');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.write(data);
                response.end();
            }
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('<h1>404 - Страница не найдена</h1>');
        response.end();
    }
}

var server = http.createServer(onRequest);
server.listen(3000, '0.0.0.0');
console.log('Сервер запущен на http://localhost:3000');
