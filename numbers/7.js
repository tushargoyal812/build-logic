var readlineSync=require('readline-sync');

var num=Number(readlineSync.question('Enter a positive integer: '));
var sum=0;
for(let i=1;i<=num;i++)
{
    sum=sum+i;
}

console.log(sum)