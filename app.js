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