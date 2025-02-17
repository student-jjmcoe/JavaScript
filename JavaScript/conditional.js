//if statements
let age = 2;
if(age >= 18){
    console.log("can vote");
}
if(age < 18){
    console.log("can not vote");
}

let mode = "light";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log("color: ",color);

//if-else statement
let mode2 = "light";
if(mode2 === "dark"){
    color="black";
}else{
    color="white";
}
console.log("color: ",color);

let age2 = 20;
if(age2 >= 18){
    console.log("Can vote");
}else{
    console.log("can not vote");
}

let num=8;
if(num % 2 === 0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}

//else if statements
let age3 = 34;
if(age3 < 18){
    console.log("junior");
}
else if(age3 > 60){
    console.log("senior");
}
else{
    console.log("Middle");
}

let mode3 = "pink";
color;
if(mode3 === "dark"){
    color ="black";
}
else if(mode3 === "blue"){
    color = "blue";
}
else if(mode3 === "pink"){
    color = "pink";
}
else{
    color = "white";
}
console.log(color);

//Ternary Operators
let age4 = 10;
let result = age4>18 ? "adult" : "not adult";
console.log("age = ",age4,"so",result);

age4>18 ? console.log("adult"): console.log("Not adult");