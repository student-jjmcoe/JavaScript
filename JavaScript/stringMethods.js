//Upper Case
let str = "Apna College";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

let str2 = "shweta";
str2 = str2.toUpperCase();
console.log(str2);

//lower case
let str3 = "SHWeTa";
let newStr3 = str3.toLowerCase();
console.log(str3);
console.log(newStr3);

//trim
let str4 = "      Apna College JS            ";
console.log(str4);
let newStr4 = str4.trim();
console.log(newStr4);   

//Slice
let string = "01234567";
console.log(string.slice(1,6));
console.log(string.slice(5));

let string2 = "hello";
console.log(string2.slice(0,3));
console.log(string2.slice(2,6));
console.log(string2.slice(1));

//concatanation
let str1 = "Apna";
str2 = "College";

let result1 = str1.concat(str2);
console.log(result1);

let result2 = str2.concat(str1);
console.log(result2);

result3 = str1 + str2;
console.log(result3);

console.log("I am learning JS from "+ str1 + str2);
console.log("hello"+ 11);


//Replace
let stri = "hello";
console.log(stri.replace("h","y"));
console.log(stri.replace("lo","p"));

str = "hellololo";
console.log(str.replace("lo","p"));
console.log(str.replaceAll("lo","p"));

//char at
str = "ILoveJS";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(4));
str[0] = "S";
console.log(str);//ILoveJS