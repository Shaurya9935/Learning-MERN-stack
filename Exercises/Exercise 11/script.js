let a = 6;
var c=1;
for (let i = 1; i <= a; i++) {
   c = c * i; 
}
console.log(c)

function factorial(number) {
    let arr = Array.from(Array(number+1).keys()) 
    let z = arr.slice(1,).reduce((a, b)=> {
        return a*b
    })   
    console.log(z)  
}
factorial(6)