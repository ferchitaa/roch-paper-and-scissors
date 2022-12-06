const btnrock = "rock";
const btnpaper = "paper";
const btnscissors = "scissors";

const tie = 0;
const win = 1;
const lost = 2;

let playing = false;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const playerImg = document.getElementById("player-img");
const machineImg = document.getElementById("machine-img");


rock.addEventListener("click", () => {
    play(btnrock);
});
paper.addEventListener("click", () => {
    play(btnpaper);
});
scissors.addEventListener("click", () => {
    play(btnscissors);
});

function play(optionPlayer) {
    if(playing) return;

    playing = true;

    playerImg.src = "img/" + optionPlayer + ".png";

    resultText.innerHTML = "loading";

    const interval = setInterval(function(){
        const optionMachine = calcMachineOption();
        machineImg.src = "img/" + optionMachine + ".jpg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const optionMachine = calcMachineOption();
        const result = calcResult(optionPlayer, optionMachine);

        machineImg.src = "img/" + optionMachine + ".png";

        switch (result) {
            case tie:
                resultText.innerHTML = "You have tied!";
                break;
            case win:
                resultText.innerHTML = "You win!";
                break;
            case lost:
                resultText.innerHTML = "You lost!";
                break;
        }
        playing = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return btnrock;
        case 1:
            return btnpaper;
        case 2:
            return btnscissors;
    }
}

function calcResult(optionPlayer, optionMachine) {
    if (optionPlayer === optionMachine) {
        return tie;

    } else if (optionPlayer === btnrock) {

        if (optionMachine === btnpaper) return lost;
        if (optionMachine === btnscissors) return win;

    } else if (optionPlayer === btnpaper) {

        if (optionMachine === btnscissors) return lost;
        if (optionMachine === btnrock) return win;

    } else if (optionPlayer === btnscissors) {

        if (optionMachine === btnrock) return lost;
        if (optionMachine === btnpaper) return win;
    }
}