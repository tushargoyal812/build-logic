function encodeString(a,num)
{
    var s='';
    for(let i=0;i<a.length;i++)
    {
        var some;
        some=a.charCodeAt(i)
        // console.log(some+2)
        s=s+String.fromCharCode(some+num)
    }
    console.log(s)
}

encodeString("neogcamp",2)