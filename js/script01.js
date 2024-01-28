// Function to play the game with loop-based validation and prompt for user input
function playGame() {
    const choices = ['rock', 'paper', 'scissors'];
  
    while (true) {
      // Prompt the user for their choice
      let playerChoice = prompt('Enter your choice: rock, paper, or scissors (or type "exit" to end the game)').toLowerCase();
  
      // Check if the user wants to exit the game
      if (playerChoice === 'exit') {
        console.log('Game over. Goodbye!');
        break; // Exit the loop if the user enters "exit"
      }
  
      // Validate player's choice using a loop
      let validChoice = false;
      for (let i = 0; i < choices.length; i++) {
        if (playerChoice === choices[i]) {
          validChoice = true;
          break;
        }
      }
  
      // If the choice is not valid, display an error message and continue to the next iteration
      if (!validChoice) {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
        continue;
      }
  
      // Get computer's choice
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      // Determine the winner
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
  
      // Display choices
      console.log('Your Choice:', playerChoice);
      console.log('Computer\'s Choice:', computerChoice);
    }
  }
  
  // Start the game
  playGame();
  