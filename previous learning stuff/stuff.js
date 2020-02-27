/*
var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;

}

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

// Alternative 1:

/*
module.exports.counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;

}

module.exports.pi = 3.142;
*/

// Alternative 2:

/*
var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;

}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

*/