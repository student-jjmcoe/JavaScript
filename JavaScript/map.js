let arr = [1,2,3,4,5,6];

arr.map((val)=>{
    console.log(val);
})

let newArr = arr.map((val)=>{
    return val*2;
})
console.log(newArr);