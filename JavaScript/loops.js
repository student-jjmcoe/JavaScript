for(let count=1; count<=50; count++){
    console.log("Apna College");
}
console.log("loop has ended");

//Calculate sum of 1 to5
let sum = 0;
for(let i = 0; i <= 5; i++){
    sum = sum+i;
}
console.log("Sum = ",sum);

sum = 0;
let n = 6;
for(let i = 0; i <= n; i++){
    sum = sum+i;
}
console.log("Sum = ",sum);

//printing 1 to 5
for(let i = 1; i<=5;i++){
    console.log("i=",i);
}

//While Loops
let i = 1;
while(i<=5){
    console.log("i=",i);
    i++;
}

//do-while
let x = 20;
do{
    console.log("x =",x);
    x++;
}while(x<=10);
let j = 1;
do{
    console.log("j=",j);
    j++;
}while(j<=5);

//for-of loop
let str = "ApnaCollege";
for(let i of str){
    console.log("i=",i);
}

let name = "Shweta";
for(let i of name){
    console.log("i=",i);
}

let size = 0;
let course = "javascript";
for(let i of course){
    console.log(i);
    size++;
}
console.log("Size of the given string =",size);

//for-in loop
let student = {
    name : "Shweta",
    age : 21,
    cgpa : 9.0,
    isPass : true,
};
for(let key in student){
    console.log("key =",key);
}
for(let i in student){
    console.log("key =",i,"Value =",student[i]);
}