/*I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong and, if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.
*/

function GuessNum(){
    const numberToGuess = Math.floor(Math.random()*100+1);
    let previousGuess = [];
    for (let i = 0; i < 10; i++){
        let userGuess = prompt("Guess the number: ");
        if(userGuess == numberToGuess){
            return "You are correct!";
            break;
        }
        else{
        previousGuess.push(userGuess);
        console.log("Previous guesses: " + previousGuess);
            if (userGuess > numberToGuess){ 
                console.log("Last guess was too high!");
            }
            else{
                console.log("Last guess was too low!");
            }
        }
    }
    return "Game Over"
}

console.log(GuessNum());