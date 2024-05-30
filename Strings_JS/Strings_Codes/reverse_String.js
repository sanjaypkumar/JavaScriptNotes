let str = "sanjay";
let a = str.split(""); // string to array
console.log(a); //print array
let b = a.reverse(); //reverse the array
let c = b.join(""); // join the reverse array
console.log(c); //print the reverse array

let revStr = str.split("").reverse().join("");
console.log(revStr);