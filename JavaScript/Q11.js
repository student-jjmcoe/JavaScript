function vowels(string){
    let count = 0;
    for(let i of string){
        if(i == "a"){
            count++;
        }
        else if(i === "e" || i === "E" ){
            count++;
        }
        else if(i === "i" || i === "I"){
            count++;
        }
        else if(i === "o" || i === "O"){
            count++;
        }
        else if(i === "u" || i === "U"){
            count++;
        } 
    }
    console.log(count);
}
vowels("Shweta");

//using arrow function
const vowelCount = (str) =>{
    let count = 0;
    for(let i of str){
        if(i == "a"){
            count++;
        }
        else if(i === "e" || i === "E" ){
            count++;
        }
        else if(i === "i" || i === "I"){
            count++;
        }
        else if(i === "o" || i === "O"){
            count++;
        }
        else if(i === "u" || i === "U"){
            count++;
        }
    }
    console.log(count);
}
vowelCount("I love JS");