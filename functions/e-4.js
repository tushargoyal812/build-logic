function findMin(...numbers) {
    var min=numbers[0];
    console.log(numbers.length)
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]<min)
        {
            min=numbers[i]
        }
    }
    console.log(min)
}
findMin(14,2,25,3)
