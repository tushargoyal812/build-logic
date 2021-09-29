var readlineSync=require('readline-sync')

var m,v,KE;

m=Number(readlineSync.question('mass: '))
v=Number(readlineSync.question('value: '))

KE=0.5*m*v*v;

console.log(KE)