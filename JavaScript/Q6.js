let num = prompt("Guess the game number");
let gameNum = 25;

while(num != gameNum){
    num = prompt("wrong number, guess again");
}
console.log("you entereed correct number, You won");