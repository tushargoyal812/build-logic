var readlineSync=require('readline-sync')

var number=readlineSync.question('enter a number: ')

var mul=number;
var some=number;

for(let i=1;i<=number-1;i++)
{
    some=some-1
    mul=mul*some
}
console.log(mul);
