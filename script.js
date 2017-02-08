/*
 * RockPaperScissors v1.0 by Louis-Gabriel
 * https://github.com/louisgab/RockPaperScissors.git
 */
var humanScore = computerScore = 0,
    names = ["Rock", "Paper", "Scissors"],
    symbols = ["✊", "✋", "✌"];

function showScores(){
    document.getElementById("human-score").innerHTML = "You : <b>"+humanScore+"</b>";
    document.getElementById("computer-score").innerHTML = "Computer : <b>"+computerScore+"</b>";
}

function main(humanChoice){
    var computerChoice = Math.floor((Math.random() * 2)),
    message = "";
    document.getElementById("human-choice").innerHTML = symbols[humanChoice]+"<br>"+names[humanChoice];
    document.getElementById("computer-choice").innerHTML = symbols[computerChoice]+"<br>"+names[computerChoice];
    if (humanChoice === computerChoice)
        message = "😫 Tie !";
    else if ((humanChoice === 0 && computerChoice === 2) || (humanChoice === 1 && computerChoice === 0) || (humanChoice === 2 && computerChoice === 1)){
        message = "😎 Win !";
        humanScore++;
    }
    else{
        message = "😥 Lost !";
        computerScore++;
    }
    document.getElementById("message").innerHTML = message;
    showScores();
}

showScores();
