var str='';

for(let i=1;i<=5;i++)
{
    for(let j=0;j<i;j++)
    {
        str=str+'*';
    }
    str=str+'\n'
}
console.log(str);