function getComputerChoice() {
    let random = Math.random();
    random *= 10;
    random = Math.round(random);
    random = (random % 3) + 1;
    return random;
}

function playRound(HChoice) {
    let CChoice = getComputerChoice();
    if (HChoice === 4) {
        HScore = 0; CScore = 0;
        result = 'YOU HAVE NOT PLAYED YET';
    } else if (CChoice === HChoice) {
        result = 'DRAW!';
    } else if ((CChoice === 2 && HChoice === 1) || (CChoice === 1 && HChoice === 3) || (CChoice === 3 && HChoice === 2)) {
        CScore++;
        result = 'YOU LOSE!';
    } else {
        HScore++;
        result = 'YOU WIN!';
    }
    document.getElementById('HScore').textContent = HScore;
    document.getElementById('CScore').textContent = CScore;
    document.getElementById('result').textContent = result;
}

let HScore = 0, CScore = 0, result = '';