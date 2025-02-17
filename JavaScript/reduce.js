let arr = [1,2,3,4];
const sum = arr.reduce((res, val)=>{
    return res+val;
})
console.log(sum);

arr = [5,6,2,1,3];
const greatest = arr.reduce((res, cur)=>{
    return res>cur ? res : cur;
})
console.log(greatest);