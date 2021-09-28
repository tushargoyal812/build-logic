function toSentenceCase(str) {
    var splited=str.split(' ');
    console.log(splited.length)
    for(let i=0;i<splited.length;i++)
    {
        splited[i]=splited[i].charAt(0).toUpperCase()+splited[i].slice(1)
    }
    var string=splited.join(' ');
    console.log(string);
    
}

toSentenceCase('we are neogGrammmers')