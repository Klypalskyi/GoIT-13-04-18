let http = require('http');
let fs = require('fs');

function handler(req, res) {
    if (req.url === '/') {
        fs.readFile('no-file', function(err, content) {
            if (err) throw err // JSON.parse(invalid)

            res.end(content);
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found")
    }
}

let server = new http.createServer(handler);
module.exports = server;