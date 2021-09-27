function replace(a,...args)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===args[0])
        {
            a[i]=args[1]
        }
    }
    console.log(a)
}


replace([1,5,6,8,9,5,3,2],5,10)