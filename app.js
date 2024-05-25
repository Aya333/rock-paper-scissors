'use strict';

const choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const getHumanChoice = () => {
    let choice = prompt('Enter your choice between rock, paper, or scissor:').toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt('Invalid choice. Please enter rock, paper, or scissor:').toLowerCase();
    }
    return choice;
};

const playRound = (human, computer) => {
    if (human === computer) {
        console.log(`It's a tie! You both chose ${human}. Try again.`);
    } else if (
        (human === 'rock' && computer === 'scissor') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissor' && computer === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`);
    }
};

const displayWinner = () => {
    if (computerScore > humanScore) {
        console.log('You lost! Refresh the page to play again.');
    } else {
        console.log('Yay! You have beaten the computer.');
    }
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    displayWinner();
};

playGame();
