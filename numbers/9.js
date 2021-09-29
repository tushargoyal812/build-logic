var readlineSync = require('readline-sync');

var input = [];
input = readlineSync.question('enter your number: ')


sum = 0;
for (let i = 0; i < input.length; i++) {
    sum = sum + Number(input[i]);
}
console.log(sum);