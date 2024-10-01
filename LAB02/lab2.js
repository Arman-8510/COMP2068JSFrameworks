// Import  prompt package
const prompt = require('prompt');

const schema = {
    properties: {
        userSelection: {
            description: 'Choose ROCK, PAPER, or SCISSORS',
            pattern: /^(rock|paper|scissors)$/i,
            message: 'Selection must be ROCK, PAPER, or SCISSORS',
            required: true
        }
    }
};

prompt.start();

prompt.get(schema, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    const userSelection = result.userSelection.toLowerCase();
    console.log(`You chose: ${userSelection}`);

    const randomNum = Math.random();
    let computerSelection = '';

    if (randomNum < 0.34) {
        computerSelection = 'paper';
    } else if (randomNum <= 0.67) {
        computerSelection = 'scissors';
    } else {
        computerSelection = 'rock';
    }

    console.log(`Computer chose: ${computerSelection}`);

    // Determine the winner
    if (userSelection === computerSelection) {
        console.log("It's  tie!");
    } else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'paper' && computerSelection === 'rock') ||
        (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
});
