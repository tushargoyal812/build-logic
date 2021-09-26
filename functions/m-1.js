function arrayLength(a)
{
    var length=0;
    for(let i=0;a[i]!==undefined;i++)
    {
        length=length+1;
    }
    console.log(length)
}


arrayLength([1,2,3,4,5,6,7,8,9,10])