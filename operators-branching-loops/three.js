var readlineSync = require('readline-sync')

var userInput = Number(readlineSync.question("enter a number: "))

var mul = [];


for (let i = 1; i <= 10; i++) {
    mul[i] = userInput * i
}


for (let j = 1; j <= 12; j++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${userInput} * ${i} = ${mul[i]}`)
    }
}