var readlineSync=require('readline-sync');
var P,R,T,SI;

P=readlineSync.question('principal amount: ')
T=readlineSync.question('time: ')
R=readlineSync.question('rate: ')

SI=(P*T*R)/100;

console.log(SI)
