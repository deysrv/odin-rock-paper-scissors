let startGame = document.querySelector(".start");

startGame.addEventListener("click",()=>{
    
    let selectContainer =  document.querySelector(".container");

    startGame.remove();
    selectContainer.style.display = "flex";
})

let buttons = document.querySelector(".buttons");

function getComputerChoice(){

    let x = Math.random();
    let computerChoice = ""

    if (x<=1/3){
        computerChoice = "rock";
    }else if (x<=2/3){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    };
    console.log(`Computer Choice ${computerChoice}`)
    
    return computerChoice;
};



function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        humanScore += 1;
        document.querySelector(".human .displayScore").innerText = humanScore;
        document.querySelector(".result").innerText = "Great, You won this round!";
        console.log("Great, You won this round!");
    }else{
        computerScore += 1;
        document.querySelector(".computer .displayScore").innerText = computerScore;
        document.querySelector(".result").innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

document.querySelector(".newGame").addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    counter = 0;
    document.querySelector(".human .displayScore").innerText = humanScore;
    document.querySelector(".computer .displayScore").innerText = computerScore;
    document.querySelector(".result").style.display = "none";
    document.querySelector(".finalResult").style.display = "none";
});

let humanScore = 0;
let computerScore = 0;
let counter =0;
const maxCounter = 5;

buttons.addEventListener("click",(e)=>
    {
        if(counter === maxCounter){
            document.querySelector(".result").style.display = "none";
            if(humanScore>computerScore){
                document.querySelector(".finalResult").innerText = "You have won the game. Please, start a new game.";
                return console.log("Congrats! You won the game");
            }else{
                document.querySelector(".finalResult").innerText = "You have lost the game. Please, start a new game.";
                return console.log("Sorry! You lost this battle");
            };
            }
        else{
            let humanChoice =""
            let target = e.target;
            console.log(`target ${target.id}`);
            switch(target.id){
                case "rock":
                    humanChoice ="rock";
                    break;
                case "paper":
                    humanChoice ="paper";
                    break;
                case "scissors":
                    humanChoice ="scissors";
                    break;
            };

            console.log(`Human Choice ${humanChoice}`)

            if (humanChoice){
                let computerChoice = getComputerChoice()
                playRound(humanChoice, computerChoice)
                document.querySelector(".human .displayScore").innerText = humanScore;
                document.querySelector(".computer .displayScore").innerText = computerScore;
                document.querySelector(".result").style.display = "block";

                counter += 1;
            };
            };
        
        if(counter === maxCounter){
            document.querySelector(".finalResult").style.display = "block";
            if(humanScore>computerScore){
                document.querySelector(".finalResult").innerText = "Congrats! You won the game";
                return console.log("Congrats! You won the game");
            }else{
                document.querySelector(".finalResult").innerText = "Sorry! You lost this battle";
                return console.log("Sorry! You lost this battle");
            };
            };
    }
);