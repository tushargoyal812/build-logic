function reverseWords(str)
{
    var str1='';
    for(let i=str.length-1;i>=0;i--)
    {
        str1=str1+str[i]
    }
    console.log(str1);
    var str2=str1.split(' ')
    console.log(str2)
    var str3='';
    for(let i=str2.length-1;i>=0;i--)
    {
        str3=str3+str2[i]+' ';
    }

    console.log(str3)
}

reverseWords("we are neogGrammers")