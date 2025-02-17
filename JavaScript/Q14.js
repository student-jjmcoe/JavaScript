let num = prompt("Enter a number :");

let arr = [];

for(i=1;i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res, cur)=>{
    return res+cur;
})
console.log("Sum is",sum);

let mul = arr.reduce((res,cur)=>{
    return res*cur;
})
console.log("Multiplication is",mul);