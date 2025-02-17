let marks = prompt("Enter your marks:");
if(marks>=90 & & marks<=100){
    console.log("your grade is A");
}
else if(marks>+70 && marks<=89){
    console.log("your grade is B");
}
else if(marks<=69 && marks>=60){
    console.log("your grade is C");
}
else if(marks<=59 && marks>=50){
    console.log("your grade is D");
}
else if(marks>=0 && marks<=49){
    console.log("your grade is F");
}
else{
    console.log("Not valid marks");
}