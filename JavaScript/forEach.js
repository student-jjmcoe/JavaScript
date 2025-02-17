let arr = [1,2,3,4,5,7];

arr.forEach(function printValues(val){
    console.log(val);
});

arr.forEach(function print(val){
    console.log(val);
});

console.log(" ");

arr.forEach((val)=>{
    console.log(val);
});
console.log(" ");
arr = ["pune","delhi","mumbai","kolkata"];
arr.forEach((val)=>{
    console.log(val.toUpperCase());
});

console.log(" ");
arr.forEach((val,idx)=>{
    console.log(val,idx);
});

console.log(" ");
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});