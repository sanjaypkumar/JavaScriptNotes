let str = " this is javascript class"

let words = str.split(" ");
let result = "";

for(word of words){
    let changeword = word[0].toUpperCase() + word.substring(1);
    result = result + changeword + " ";
}

console.log(result);