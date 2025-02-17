let marks = [97,89,34,67,55];
console.log(marks);
console.log(marks.length);

//accessing array elements
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[3]);
console.log(marks[100]);

//changing array values
marks[1]=66;
console.log(marks);

//using for loop to print array elements
let heroes = ["iron man","Doctor Strange","Thor","Hulk","Spider man","Ant man","Black Panther"];
console.log(heroes);
console.log(typeof heroes);

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
console.log(" ");
for(let i of heroes){
    console.log(i);
}
console.log(" ");
for(let i in heroes){
    console.log(heroes[i]);
}
console.log(" ");
let cities = ["delhi","pune","mumbai","hydrabad","kolhapur"];
for(let city of cities){
    console.log(city);
}
console.log(" ");
for(let city of cities){
    console.log(city.toUpperCase());
}