let domain = require('domain');
let serverDomain = domain.create();

let server;

serverDomain.on('error', function(err) {
    console.error("Домен прехватил %s", err);
    if (server) server.close();

    setTimeout(function() {
        process.exit(1);
    }, 1000).unref();
});

serverDomain.run(function() {
    let http = require('http');
    let handler = require('./handler');
    //let db = require('mongodb');

    server = http.createServer(function(req, res) {

        let reqDomain = domain.create();
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', function(err) {
            res.statusCode = 500;
            res.end('Sorry, ' + err);
            console.error('Error for req = ', req)
            
            serverDomain.emit('error', err)
        });

        reqDomain.run(function() {
            handler(req, res);
        });
    });

    server.listen(3000)
})