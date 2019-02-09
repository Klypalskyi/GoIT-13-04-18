let http = require('http');
let fs =require('fs');

new http.Server(function(req, res) {

    if(req.url === '/big.html') {

        let file = new fs.ReadStream('big.html');
        sendFile(file, res);
        // fs.readFile('big.html', function(err, content) {
        //     if (err) {
        //         res.statusCode = 500;
        //         res.end('Server error');
        //     } else {
        //         res.setHeader('Content-Type', 'text/html; charset=utf-8');
        //         res.end(content)
        //     }
        // })
    }
}).listen(3000);


function sendFile(file, res) {

    file.pipe(res);
    // file.pipe(process.stdout)
    file.on('error', function(err) {
        res.statusCode = 500;
        res.end("Server Error");
        console.log(err);
    });

    file
    .on('open', function() {
        console.log('Open');
    })
    .on('close', function() {
        console.log('close');
    });

    res.on('close', function() {
        file.destroy();
    })

    // file.on('readable', write);

    // function write () {
    //     let fileContent = file.read();

    //     if (fileContent && !res.write(fileContent)) {
    //         file.removeListener('readable', write);

    //         res.once('drain', function() {
    //             file.on('readable', write);
    //             write();
    //         });
    //     }
    // }
    // file.on('end', function() {
    //     res.end();
    // });
}