var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// Manual version:
/*
myReadStream.on('data', function(chunk){
    console.log('New chunk received');
    myWriteStream.write(chunk);
})
*/

// Automatic version:
/*
myReadStream.pipe(myWriteStream);
*/

// Pipe version:
/*
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log(' Yo dawgs! Now listenin to port 3000');
*/

// JSON serving as an API:
/*
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});
*/

