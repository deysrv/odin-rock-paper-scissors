console.log("Hello World!");

function getComputerChoice(){

    let x = Math.random();

    if (x<=1/3){
        return "rock";
    }else if (x<=2/3){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){

    let humanChoice = prompt("Choose one from {'rock', 'paper', 'scissors'}")

    console.log(`Your Choice: ${humanChoice}`)

    return humanChoice.toLowerCase()
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        humanScore += 1
        console.log("Great, You won this round!")
    }else{
        computerScore += 1
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }

}

function playGame(){
    let counter = 0;
    while(counter<5){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice)
        counter += 1
    }
    if(humanScore>computerScore){
        humanScore = 0
        computerScore = 0
        return console.log("Congrats! You won the game.")
    }else{
        humanScore = 0
        computerScore = 0
        return console.log("Sorry! You lost this battle.")
    }
}