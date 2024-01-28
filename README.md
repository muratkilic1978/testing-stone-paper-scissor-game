# Exercise: Rock, Paper, Scissors Game

## Objective:

Create a simple Rock, Paper, Scissors game that runs in the browser console. Practice using prompts, loops, conditionals, and functions in JavaScript.

## Instructions for the Student:

### Step 1: Display a Welcome Message

Display Welcome Message:

Use `console.log` to greet the user and introduce them to the Rock, Paper, Scissors game.

### Step 2: Function Declaration

Define a function named playGame without any parameters.


### Step 3: GameRunning Variable

Define a a variable named **gameRunning** and set it's value to **true** - inside the playGame function.

### Step 4: While loop
After the variable gameRunning define a while loop to repeatedly run the game until the gameRunning variable is set to false.

### Step 5: Prompt the User for Their Choice

Inside the while loop of the playGame function, use prompt to ask the user to choose between rock, paper, or scissors or to choose exit and save the choice in a variable named **playerChoice**

### Step 6: Check if player clicked on cancel
Check if the user clicked "Cancel". This can be done by checking if playerChoice is equal to **null**. If so, display a message and set the vairable **gameRunning** to **false**. Finally use the **break** to interupt the while loop.


### Step 7  Check if player entered Exit Command
Check if the user wants to quit the game by typing **exit**. If user chooses to quit the game, then display a message using console.log and set the vairable **gameRunning** to **false**. Finally use the **break** to interupt the while loop.

### Step 8  User's Choice Validation
Create a new variable named **validChoice> and set it to **false**.

### Step 9 Array of possible choices
Define an array with the name **choice** which contains the following elements or "rock", "paper" and "scissors"

### Step 10 for loop validating user's choice
Use a for loop to check if **playerChoice** is equal to one of the valid options: 'rock', 'paper', or 'scissors'. 
If **playerChoice** is equal to choices[i], then set the variable validChoice to **true** and break out of the for loop.

Here is the syntax for a **for** loop 
``` Javascript
for (let i = 0: i < length of choice array; increment variable i with one) {
    playerChoice validation code goes here
}
```

### Step 11 Check if user's choice is not valid
Go outside the for loop and define a if statement that check if validChoice is not true. This can be done by writing 
```Javascript 
if(!validChoice) {
    
}
```
If validChoice is not true, then display a message using console.log that says 'Invalid choice. Please enter rock, paper, scissors'. After the message  use **continue** to start a new iteration of the loop.

### Step 12 Generate the Computer's Choice
After validating the user's choice, generate the computer's choice randomly by using the Math.floor with Math.random() function to select an index from the choices array and save it in a variable named **computerChoice**

This can be done by writing 
```Javascript 
const computerChoice = choices[ Math.floor[Math.random() * choices.length) ];
```


### Step 13 Determine the Winner
Evaluate if the user's choice (playerChoice) is equal to the computer's choice (computerChoice). If so, display af console.log message that says it's draw. If the choices differ, check specific conditions for a user victory:
User selects 'rock' and computer selects 'scissors'.
User selects 'paper' and computer selects 'rock'.
User selects 'scissors' and computer selects 'paper'.If so, display a message indicating that the user wins. If none of the above conditions are met, it means the computer wins.
Write a console.log message indicating that the computer wins.


### Step 14 Display plyarChoice and computerChoice
After determining the winner, use console.log to display the choices made by the user and the computer.

### Step 15 Call the function playGame
Place your cursor outside the playGame function and start the game by calling playGame function.
