function minDate(a,b)
{
    var date1=a.split('/');
    var date2=b.split('/');
    if(date1[1]<date2[1])
    {
        return a;
    }
    else{
        return b`;
    }
}

console.log(minDate('02/05/2021','24/01/2021'))