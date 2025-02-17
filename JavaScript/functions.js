function myFunction(){
    console.log("Welcome to coding world");
    console.log("we are learning JS");
}

myFunction();
myFunction();
myFunction();
myFunction();

function newFunction(msg){
    console.log(msg);
}

newFunction("I love JS");

//function to calculate sum of two number
function sum(x,y){
    console.log(`the sum of ${x} and ${y} is ${x+y}`);
}
sum(23,7);

//using return
function add(x,y){
    s = x+y;
    return s;
}
let val = add(9,31);
console.log("Sum =",val);

function add2(x,y){
    s = x+y;
    console.log("Before return");
    return s;
    console.log("After return");
}
val = add2(21,31);
console.log("Sum =",val);

//Arrow function part of modern JS
const arrowSum = (a,b)=>{
    console.log(a+b);
}
arrowSum(2,8);

const arrowMul = (a, b)=>{
    return a*b;
}
let v = arrowMul(3,30);
console.log("Multiplication =",v);

const hello = () => {
    console.log("Hello");
}
hello();

const printHello = () => console.log("Hello !");
printHello();