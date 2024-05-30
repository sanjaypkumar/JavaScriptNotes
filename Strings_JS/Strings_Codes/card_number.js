let cardnumber = "1111222233334444";

let result1 = cardnumber.match(/[0-9]{1,4}/g).join("-");
let result2 = cardnumber.match(/.{1,4}/g).join("-");

console.log(result1);
console.log(result2)

let arr = [];
for(let i=0; i<cardnumber.length;i=i+4){
    arr.push(cardnumber.substr(i,4));
}

let result = arr.join("-")
console.log(result);
