var readlineSync=require('readline-sync');

var day=readlineSync.question('enter a day: ')

if(day==='saturday'||day==='sunday')
{
    console.log('weekend')
}
else{
    console.log('weekday');
}