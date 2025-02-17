//push method
let foodItems=["Apple","Potato","Litchi","Tomato"];
console.log(foodItems);

foodItems.push("Chips");
console.log(foodItems);

foodItems.push("Mango","Burger","Paneer");
console.log(foodItems);

//pop method
foodItems.pop();
console.log(foodItems);

let deleted = foodItems.pop();
console.log(foodItems);
console.log("deleted Item is :",deleted);

//toString method
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems); 

let marks = [97, 67, 45, 89];
console.log(marks);
console.log(marks.toString());

//concat method
let marvelheroes = ["thor","spiderman","ironman"];
let dcheroes = ["superman", "batman"];

let heroes = marvelheroes.concat(dcheroes);
console.log(heroes);

marvelheroes = ["thor","spiderman","ironman"];
dcheroes = ["superman", "batman"];
let indianheroes = ["krish","shaktiman"]
heroes = marvelheroes.concat(dcheroes,indianheroes);
console.log(heroes);

//unshift method
console.log(marvelheroes);
marvelheroes.unshift("antman");
console.log(marvelheroes);


//shift method
marvelheroes.shift();
console.log(marvelheroes);
let deleted2 = marvelheroes.shift();
console.log(marvelheroes);
console.log("Deleted =",deleted2);

//slice method
console.log(heroes);
console.log(heroes.slice(0,3));
console.log(heroes.slice(2,4));
console.log(heroes.slice(3));

//splice method
let arr = [1,2,3,4,5,6,7];
console.log(arr);
arr.splice(2,2,100,101,102);
console.log(arr);
//only add
arr.splice(4,0,200);
console.log(arr);
//only delet
arr.splice(6,2);
console.log(arr);
//replace
arr.splice(0,1,300);
console.log(arr);
//as slice
arr.splice(4);
console.log(arr);
//not passing anything
arr.splice();
console.log(arr);