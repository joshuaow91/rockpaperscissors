const getUserChoice = function (userInput) {
    if (userInput.toLowerCase() === 'rock') {
        return userInput = userInput.toLowerCase();
 } else if (userInput.toLowerCase() === 'rock') {
        return userInput = userInput.toLowerCase();
 } else if (userInput.toLowerCase() === 'paper') {
        return userInput = userInput.toLowerCase();
 } else if (userInput.toLowerCase() === 'scissors') {
        return userInput = userInput.toLowerCase();
 } else if (userInput.toLowerCase() === 'bomb') {
        return userInput = userInput.toLowerCase();
 } else {
     console.log('Error, unknown entry');
 }
}

const getComputerChoice = function () {
  let getComputerChoice = Math.floor(Math.random() * 3);
    if (getComputerChoice === 0) {
        return 'rock';
    } else if (getComputerChoice === 1) {
        return 'paper';
    } else if (getComputerChoice === 2) {
        return 'scissors';
    }
}

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    } 
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'The computer won';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'The user won';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'the computer won';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        return 'the user won';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'The computer won';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'The user won';
    } else if (userChoice === 'bomb') {
        return 'The user wins no matter what';
    }
}

const playGame = function () {
   let userChoice = getUserChoice('BOMB');
   console.log(userChoice);
   let computerChoice = getComputerChoice();
   console.log(computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}

playGame ();
