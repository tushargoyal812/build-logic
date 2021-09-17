var readlineSync = require('readline-sync');

var num = readlineSync.question('enter a number: ')

var result;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        result='not a prime'
        console.log(result)
        return;
    } else {
        result='prime'
    }
}

console.log(result);



