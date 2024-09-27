let userScore = 0;
let PCscore = 0;

const Choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#PC-score");

const genCompChoice = () => {
    const options =["Rock", "Paper", "Scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
    // Rock Paper Scissors
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again.!";
    msg.style.backgroundColor = "magenta";
};

const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win.! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else if
        (userScore === 10){
        msg.innerText = "You Won The Game.!";
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "black";

    } else if
        (PCscore === 10){
        msg.innerText = "Computer Won The Game.!";
        compScorePara.innerText = PCscore;
        msg.style.backgroundColor = "black";
    } else {
        PCscore++;
        compScorePara.innerText = PCscore;
        msg.innerText = `You lose.! ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
};

const playGame = (userChoice) => {
    // ToGenrate Comp Choice
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            userWin = CompChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper") {
            userWin = CompChoice === "Scissors" ? false : true;
        }else {
            userWin = CompChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};



Choices.forEach((Choice) => {
    Choice.addEventListener("click", () => {
        const userChoice = Choice.getAttribute("id");
        playGame(userChoice);
    });
});
