let url = require('url');

let server = new http.Server(function(req, res) {
    console.log(req.headers );

    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    debugger

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate');
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404; //Not found
        res.end('Page not found');
    }
});



server.listen(1337, '127.0.0.1');
console.log('object');