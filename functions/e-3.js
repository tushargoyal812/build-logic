function numOfWords(str)
{
   var space=0;
   for(let i=0;i<str.length;i++)
   {
       if(str[i]===' ')
       {
           space=space+1;
       }
   }
   console.log(space+1);
}

numOfWords("hello myself tushar goyal")