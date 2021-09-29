var readlienSync=require('readline-Sync');

var a=readlienSync.question('a: ')

var area=a*a;
var perimeter=4*a;
var surfaceArea=6*a*a;
var volume=a*a*a;

console.log('Area: ',area+' Perimeter: ',perimeter+' Surface Area: ',surfaceArea+' Volume: ',volume)