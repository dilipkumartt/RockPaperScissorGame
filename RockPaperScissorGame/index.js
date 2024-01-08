let userScore = 0;
let oppScore = 0;
const choic = document.querySelectorAll(".chocie");
const messagee = document.querySelector("#choose");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#opp-score");

const overAllScore = document.querySelector("#user-stats");



const updateScoreBoard = (userScore,oppScore)=>{
    if(userScore==oppScore){
    overAllScore.innerText = "It's Draw";
    overAllScore.style.backgroundColor = "#081b31";
}
else if(userScore>oppScore){
    overAllScore.innerText = "User Leads By "+(userScore-oppScore)+" Games";
    overAllScore.style.backgroundColor = "green";
}
else{
    overAllScore.innerText = "User Trails By "+(oppScore-userScore)+" Games";
    overAllScore.style.backgroundColor = "red";
}
}
const getOppChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    messagee.innerText = "Game was Draw. Play again.";
    messagee.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,oppChoice)=>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        messagee.innerText = `You win! Your ${userChoice} beats ${oppChoice}`;
        messagee.style.backgroundColor = "green";
      } else {
        oppScore++;
        compScorePara.innerText = oppScore;
        messagee.innerText = `You lost. ${oppChoice} beats your ${userChoice}`;
        messagee.style.backgroundColor = "red";
      }
    updateScoreBoard(userScore,oppScore);
}

const  playGame =(userChoice)=>{
    const oppChoice = getOppChoice();

    if(userChoice==oppChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice==="rock"){
            userWin = oppChoice==="scissors"?true:false;
        }
        else if(userChoice=="paper"){
            userWin = oppChoice==="rock"?true:false;
        }
        else{
            userWin = oppChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,oppChoice);
    }
}
choic.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});