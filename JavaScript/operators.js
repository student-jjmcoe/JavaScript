//Arithmetic Operators
let a = 5;
let b = 2;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);

//Modulas Operator
console.log("a % b = ",a%b);

//Exponentiation(**) operator
console.log("a ** b = ",a**b);

//Unary Operators (Increment , Decrement)
console.log("a = ",a, "& b = ",b);
a++;
console.log("a = ",a);
b--;
console.log("b = ",b);
console.log("a = ",++a);
console.log("b = ",--b);

//Assignment Operators
let y=5;
y+=2;
console.log("y = ",y);

y-=2;
console.log("y = ",y);

y*=2;
console.log("y = ",y);

y/=2;
console.log("y = ",y);

y%=2;
console.log("y = ",y);

z=4;
z **= 2;
console.log("z = ",z);


//Comparision Operator
let s = 5;
let c = 2;

console.log("s =",s, " &c =",c);
console.log("s == c",s == c);
console.log("s != c",s != c);

s = 5;
c = "5";
console.log("s = ",s," & c = ",c);
console.log("s == c",s==c);
console.log("s != c",s!=c);

console.log("s === c", s===c);
console.log("s !== c", s!==c);

let r = 6;
let p = 5;
console.log("r = ",r, " & p = ",p);
console.log("r > p", r>p);
console.log("r < p", r<p);
console.log("r >= p", r>=p);
console.log("r <= p", r<=p);

//Logical Operators
let num1 = 6;
let num2 = 5;
let cond1 = num1>num2;
let cond2 = num2 === 5;
console.log("cond1 && cond2 :",cond1 && cond2);

let cond3 = num1<num2;
let cond4 = num2 === 5;
console.log("cond3 && cond4 :",cond3 && cond4);

let cond5 = num1>num2;
let cond6 = num2==6;
console.log("cond5 && cond6 :",cond5 && cond6);

let cond7 = num1<num2;
let cond8 = num2 == 6;
console.log("cond7 && cond8 :",cond7 && cond8);

let n1 = 23;
let n2 = 20;
console.log("cond1 || cond2 :",n1>n2 || n1===23);
console.log("cond1 || cond2 :",n1<n2 || n1===23);
console.log("cond1 || cond2 :",n1>n2 || n1===25);
console.log("cond1 || cond2 :",n1<n2 || n1===25);

console.log("!(n1 > n2):", !(n1>n2));
console.log("!(n1 < n2):",!(n1<n2));