//strings
let str ="Apna College";
let str2 ="Shweta";

console.log("str =",str);
console.log("str2 =",str2);

console.log("length of str =",str.length);
console.log("length of str2 =",str2.length);

console.log(str[0]);
console.log(str[1]);
console.log(str[8]);

//Template literals
let specialString = `This is a tamplate literal ${1+2+3}`;
console.log(specialString);

let obj = {
    item : "Pen",
    price : 10,
};
console.log("the price of",obj.item,"is",obj.price,"rupees");
console.log(`the price of ${obj.item} is ${obj.price} rupees`);

str = "Apna\nCollege";
console.log(str);
console.log(str.length);

str = "Apna\tCollege";
console.log(str);
console.log(str.length);