var readlineSync=require('readline-sync');

var number=readlineSync.question('enter a number: ');

if(number%2===0)
{
    console.log('even number')
}
else{
    console.log('odd number');
}