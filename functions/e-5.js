function findMax(...numbers)
{
    max=numbers[0]
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>max)
        {
            max=numbers[i]
        }
    }
    console.log(max)
}


findMax(35,54,36,25)