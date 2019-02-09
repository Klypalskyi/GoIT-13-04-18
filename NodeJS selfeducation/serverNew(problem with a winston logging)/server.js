/* let http = require('http');

let server = new http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;

let emit = server.emit;
server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments)
};

server.on('request', function(req, res) {
    res.end('Hello world!' + ++counter)
}) */

// ==============================================

let http = require('http');
let log = require('winston');

let server = new http.Server()

server.on('request', require('./request'));

server.listen(1337);

log.info('Server is running');