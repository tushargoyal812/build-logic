function indexOf(a,b)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===b)
        {
            return i;
        }
    }
}

var index=indexOf([1,2,3,4,6,9,4],6)
console.log(index)