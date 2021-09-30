var readlineSync = require('readline-sync');

var arr = [];
arr=readlineSync.question('enter your number: ')

function rotateLeft(arr,d)
{
    var answer=arr.substring(d,arr.length)+arr.substring(0,d)
    console.log(answer);
}

rotateLeft(arr,2)
