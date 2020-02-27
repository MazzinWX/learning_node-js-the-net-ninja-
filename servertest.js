var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);

    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'Ryu', age: 29},{name: 'Yoshi', age: 32}];
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else if(req.url === '/main.css'){
        res.writeHead(200, {"Content-Type": "text/css"});
        fs.createReadStream(__dirname + '/main.css').pipe(res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/error404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log(' Yo dawgs! Now listenin to port 3000');