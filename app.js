'use strict';
const computerChoice = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function (arr) {
    const randomChoice = Math.trunc(Math.random() * 3);
    return arr[randomChoice];
}

const randomComputerChoice = getComputerChoice(computerChoice);
console.log("random : " + randomComputerChoice);

let humanChoice = prompt('Enter your choice between rock paper or scissor!!!');

const getHumanChoice = function (choice) {
    'use strict';

    let computerScore = 0;
    let playerScore = 0;

    const choices = ['Rock', 'Paper', 'Scissor'];

    const getComputerChoice = function (arr) {
        const randomChoice = Math.trunc(Math.random() * 3);
        return arr[randomChoice];
    };

    const getPlayerChoice = function () {
        return prompt('Choose between rock, paper & scissor to play against the computer (first to 5 points win)');
    };

    const playRound = function (playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log(`It's a tie! Try again`);
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper')
        ) {
            playerScore++;
            console.log(`You win! by ${playerScore} points`);
        } else {
            computerScore++;
            console.log(`Computer wins! by ${computerScore} points`);
        }
    };

    const winner = function () {
        if (playerScore === 5 && playerScore > computerScore) {
            console.log('Congrats, you have won!');
        } else {
            console.log('You have lost!');
        }
    };

    const game = function () {
        for (let i = 0; i <= 5; i++) {
            const playerChoice = getPlayerChoice();
            const computerChoice = getComputerChoice(choices);
            console.log(`PLAYER'S CHOICE: ${playerChoice}`);
            console.log(`COMPUTER'S CHOICE: ${computerChoice}`);
            playRound(playerChoice, computerChoice);
        }
        winner();
    };

    game();

    if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissor') {
        return choice;
    } else {
        humanChoice = prompt('Enter your choice between rock paper or scissor!!!');
    }
}

const playerChoice = getHumanChoice(humanChoice);
console.log("my choice : " + playerChoice);
const playRound = function (human, computer) {
    if (human === computer) {
        console.log('Its a tie try again!!!');
        humanChoice = prompt('Enter your choice between rock paper or scissor!!!');
    } else if ((human === 'rock' && computer === 'scissor') || (human === 'paper' && computer === 'rock') || (human === 'scissor' && computer === 'paper')) {
        humanScore++;
        console.log(`You win!! ${human} beats ${computer}`);
        humanChoice = prompt('Enter your choice between rock paper or scissor!!!');

    } else if ((human === 'scissor' && computer === 'rock') || (human === 'rock' && computer === 'paper') || (human === 'paper' && computer === 'scissor')) {
        computerScore++;
        console.log(`You loose!! ${computer} beats ${human}`);
        humanChoice = prompt('Enter your choice between rock paper or scissor!!!');

    }
}


const winner = function (humanScore, computerScore) {
    if (computerScore > humanScore) {
        console.log('you lost refresh to play again');
    } else {
        console.log('Yayy you have beaten computer');
    }
}

const playGame = function () {
    for (let index = 1; index <= 5; index++) {
        const randomComputerChoice = getComputerChoice(computerChoice);
        const playerChoice = getHumanChoice(humanChoice);
        playRound(playerChoice, randomComputerChoice);
    }
    winner(humanScore, computerScore);
}

playGame();