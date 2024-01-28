// Step 1: Display a welcome message
console.log('Welcome to the Rock, Paper, Scissors game!');

// Step 8: Repeat the game (put the entire code inside a function)
function playGame() {
  while (true) {
    // Step 2: Prompt the user for their choice
    let playerChoice = prompt('Enter your choice: rock, paper, or scissors (or type "exit" to end the game)');

    // Check if the user clicked "Cancel" or if the prompt returned null
    if (playerChoice === null) {
      console.log('Game over. Goodbye!');
      break;
    }

    playerChoice = playerChoice.toLowerCase(); // Convert to lowercase

    // Step 3: Check if the user wants to exit the game
    if (playerChoice === 'exit') {
      console.log('Game over. Goodbye!');
      break; // Exit the loop if the user enters "exit"
    }

    // Step 4: Validate the user's choice
    let validChoice = false;
    const choices = ['rock', 'paper', 'scissors'];

    for (let i = 0; i < choices.length; i++) {
      if (playerChoice === choices[i]) {
        validChoice = true;
        break;
      }
    }

    // Step 4a: If the choice is not valid, display an error message
    if (!validChoice) {
      console.log('Invalid choice. Please choose rock, paper, or scissors.');
      continue; // Skip the rest of the loop and start a new iteration
    }

    // Step 5: Generate the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Step 6: Determine the winner
    if (playerChoice === computerChoice) {
      console.log('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log('You win!');
    } else {
      console.log('Computer wins!');
    }

    // Step 7: Display the choices made by the user and computer
    console.log('Your Choice:', playerChoice);
    console.log('Computer\'s Choice:', computerChoice);
  }
}

// Step 8: Call the playGame function to start the game
playGame();
