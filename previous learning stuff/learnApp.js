var fs = require('fs');

// Sync version:

/*
var readMe = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe);
*/

// Async version 1:

/*
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, (err) => {
        if (err) throw err;
        console.log('It is saved!');
        });
});
*/

// Async version 2:

/*
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, ((err, data)=>data?err : true));});
*/

//Async version 2 + create / delete:


fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.access('writeMe.txt', fs.F_OK, (err) => {
        if (err) {
            console.log('File does not exist')
            fs.writeFile('writeMe.txt', data, ((err, data)=>data?err : true));
            console.log('Now it exist!');
        } else {
            console.log('File already exist');
            fs.unlink('writeMe.txt', function(){});
            console.log('File deleted');
        }
    });
});