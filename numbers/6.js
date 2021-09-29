var readlineSync=require('readline-sync');

var CP=readlineSync.question('current price: ')
var SP=readlineSync.question('selling price: ')

var value=SP-CP;

if(SP>CP)
{
    console.log('profit: ',value)
}
else{
    console.log('loss: ',-value)
}