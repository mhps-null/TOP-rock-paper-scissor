function getComputerChoice() {
    let random = Math.random();
    random *= 10;
    random = Math.round(random);
    random = (random % 3) + 1;
    return random;
}

function getHumanChoice() {
    let HChoice = prompt('Input your choice:\n1. Rock\n2. Paper\n3. Scissor\n4. Exit');
    return Number(HChoice);
}

function playRound() {
    let HChoice = 0;
    do {
        let CChoice = getComputerChoice();
        HChoice = getHumanChoice();

        if (CChoice === HChoice) {
            alert('draw!');
            continue;
        } else if ((CChoice === 2 && HChoice === 1) || (CChoice === 1 && HChoice === 3) || (CChoice === 3 && HChoice === 2)) {
            CScore++;
        } else {
            HScore++;
        }
    } while (HChoice !== 4);
}

let HScore = 0, CScore = 0;

playRound();