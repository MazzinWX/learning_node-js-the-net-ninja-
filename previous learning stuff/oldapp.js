/*
Exemple 1:

time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' second have passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);
*/

/*
console.log(__dirname);
console.log(__filename);
*/

/*
function sayHi() {
    console.log('Hello Whigga!!');
}
sayHi();

var sayBye = function(){
     console.log('See ya, crook!');
};
sayBye();
*/

/*
function callFunction(fun){
     fun();
}

var sayBye = function(){
    console.log('See ya, crook!');
};

callFunction(sayBye);
*/

/*
var stuff  = require('./stuff');

console.log(stuff.counter(['Franck', 'Alberta', 'Claudius', 'Zenobie']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));
*/

/*
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Mary = new Person('Mary');
var Hanck = new Person('Hanck');

var people = [James, Mary, Hanck];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: \"' + mssg + '\"')
    })
})


James.emit('speak', 'Hey Whigga!!');
Mary.emit('speak', 'Such cool sunglasses, Hanck!');
Hanck.emit('speak', 'Thank you! But not as much as you, Mary');

*/