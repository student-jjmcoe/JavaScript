let marks = [85, 97, 44, 37, 76, 60];
console.log(marks);

let sum =0;
for(let i=0; i<marks.length; i++){
    sum = sum + marks[i];
}
console.log("Sum =",sum);
let avg = sum/(marks.length);
console.log("Avarage =",avg);

sum = 0;
for(let val of marks){
    sum=sum+val;
}
avg = sum/marks.length;
console.log(`Avg of marks of the class = ${avg}`);