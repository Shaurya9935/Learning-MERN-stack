function Adjective() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let d = Math.floor(Math.random()*3);
    console.log(d);
    if(d == 0) return a;
    else if(d == 1) return b;
    else return c;  
}
function shopName() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    let d = Math.floor(Math.random()*3);
    console.log(d);
    if(d == 0) return a;
    else if(d == 1) return b;
    else return c; 
}
function Anotherword() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    let d = Math.floor(Math.random()*3);
    console.log(d);
    if(d == 0) return a;
    else if(d == 1) return b;
    else return c;  
}
console.log("Buisness name \n", Adjective(), shopName(), Anotherword() );