var readlineSync = require('readline-sync');

var C, F;

F = readlineSync.question('Fahreniet: ')

C = (F - 32) * 5 / 9

console.log(C)