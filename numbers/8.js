var readlineSync = require('readline-sync');

var input = Number(readlineSync.question('enter your number: '))

for (let i = input * 2; i > 0; i--) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}