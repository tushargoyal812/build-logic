var readlineSync = require('readline-sync');

var input=readlineSync.question('enter your number: ');
var str='';
for(let i=input.length-1;i>=0;i--)
{
    str=str+input[i]
}
console.log(str);