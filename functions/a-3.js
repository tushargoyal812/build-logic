function sortArray(arr)
{
    for(let j=0;j<arr.length;j++)
    {
        for(let i=0,temp;i<arr.length;i++)
        {
            if(arr[i]>arr[i+1])
            {
                temp=arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
            }
        }
    }
    console.log(arr)
}

sortArray([25,36,5,20,32,15])