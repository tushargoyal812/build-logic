var readlineSync=require('readline-sync');

var months=['fab','apr','june','sep','nov'];

var userInput=readlineSync.question('enter a month name: ');

for(let i=0;i<months.length;i++)
{
    if(months[i]===userInput)
    {
        console.log("month not has 31 days ");
        return;
    }

}
console.log('month has 31 days');
