console.log("Welcome to paper, rock , scissors Game");
let computerScore = 0;
let playerScore = 0;


function playGame() {
let gameRunning = true;
    while(gameRunning) {
        let playerChoice = prompt("Enter your choice: rock, paper scissors, (or type exit to end game");
        
        if (playerChoice === null) {
            console.log("Game over. Good bye");
            gameRunning = false;
            break;
        }

        if (playerChoice === 'exit') {
            console.log("Game over. Good bye");
            gameRunning = false;
            break;
        }

        let validChoice = false;
        const choices = ['rock', 'paper', 'scissors'];

        for (let i = 0; i < choices.length; i++ ) {
            if (playerChoice === choices[i]) {
                validChoice = true;
                break;

            }
        }

        if (!validChoice) {
            console.log('Invalid choice. Please enter rock, paper, scissors');
            continue;
        }

        const computerChoice = choices[ Math.floor(Math.random() * choices.length) ];

        if (playerChoice === computerChoice) {
            console.log("It's a draw");
        } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'scissors' && computerChoice === 'paper') ||
          (playerChoice === 'paper' && computerChoice === 'rock') 
        ) {
            // playerScore ++;
            console.log('You win!');
        } else {
            // computerScore ++;
            console.log('Computer wins');
        }

        console.log('Your Choice:', playerChoice);
        console.log('Computer\'s Choice:', computerChoice);

    }
    // displayScoreBoard();
}

// function displayScoreBoard(){
//     const scoreboardTitle = ('####Scoreboard######\n');
//     let displayPlayerScore = `Player has ${playerScore} points`;
//     let displayComputerScore = `Computer has ${computerScore} points`;
//     let messsage = `${scoreboardTitle} ${displayPlayerScore} ${displayComputerScore}`;

//     console.log(messsage);
// }

playGame();