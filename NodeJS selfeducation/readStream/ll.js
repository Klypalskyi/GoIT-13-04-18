let fs = require('fs');

let stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});

stream.on('readable', function() {
    let data = stream.read();
    console.log(data);
});

stream.on('end', function() {
    console.log('THE END');
})

stream.on('error', function(err) {
    if(err.code === 'ENOENT') {
        console.log('File not found');
    } else {
        console.error(err);
    }
})