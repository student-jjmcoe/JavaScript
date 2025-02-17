let arr = [1,2,3,4,5,6,7,8];

let evenNum = arr.filter((val)=>{
    return val%2 === 0;
});
console.log("Even Numbers =",evenNum);

let oddNum = arr.filter((val)=>{
    return val%2 !== 0;
});
console.log("Odd numbers =",oddNum);

let greater = arr.filter((val)=>{
    return val>3;
});
console.log("Greater Than 3 =",greater);