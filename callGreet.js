var greeting = require('./greet.js');
var greeting1 = new greeting('Messmer');
var greeting2 = new greeting('John');
var greeting3 = new greeting('Jane');
console.log(greeting1.greeting());
console.log(greeting2.greeting());
console.log(greeting3.greeting());