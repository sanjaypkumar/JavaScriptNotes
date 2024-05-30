let str = "entertainment"

for(char of str){
    if(str.indexOf(char) === str.lastIndexOf(char)){
        console.log(char);
        break; // for print the first element of the non repeated number
    }
}