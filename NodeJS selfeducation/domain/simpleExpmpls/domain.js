let domain = require('domain');
let fs = require('fs');
let http = require('http');
let d = domain.create();

let server;

d.on('error', function(err) {
    console.error("Домен прехватил %s", err);
})

server = new http.Server();

d.run(function() {
  d.add(server)
});

server.on('boom', function() {
    setTimeout(() => {
        fs.readFile(__filename, function() {
            Error();
        })
    }, 1000);
});

server.emit('boom')