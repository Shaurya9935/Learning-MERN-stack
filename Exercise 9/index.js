let random = Math.random();
console.log(random);
let a = prompt("Enter the first number");
let o = prompt("Enter the operation");
let b = prompt("Enter the second number");
let obj = {
    "+" : " -",
    "*" : " +",
    "-" : " /",
    "/" : " **",
}
if(random > 0.1){
    alert(`The result is ${eval(`${a}${o}${b}`)}`);
}
else{
    o= obj[o];
    alert(`The result is ${eval(`${a}${o}${b}`)}`);
}