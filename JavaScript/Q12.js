let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach((val)=>{
    console.log("Squa of",val,"is",val*val);
})

//or
function calSquare(val){
    console.log("Squa of",val,"is",val*val);
}
arr.forEach(calSquare); 