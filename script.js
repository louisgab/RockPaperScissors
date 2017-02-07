var humanScore = computerScore = 0,
    choices = ["pierre", "feuille", "ciseaux"],
    symbols = ["✊", "✋", "✌"];

function showScores(){
    document.getElementById("human-score").innerHTML = "Vous : <b>"+humanScore+"</b>";
    document.getElementById("computer-score").innerHTML = "Ordinateur : <b>"+computerScore+"</b>";
}

function main(humanChoice){
    var computerChoice = Math.floor((Math.random() * 2)),
    message = "";
    document.getElementById("human-choice").innerHTML = symbols[humanChoice];
    document.getElementById("computer-choice").innerHTML = symbols[computerChoice];
    if (humanChoice === computerChoice)
        message = "😫 Egalité !";
    else if ((humanChoice === 0 && computerChoice === 2) || (humanChoice === 1 && computerChoice === 0) || (humanChoice === 2 && computerChoice === 1)){
        message = "😎 Gagné !";
        humanScore++;
    }
    else{
        message = "😥 Perdu !";
        computerScore++;
    }
    document.getElementById("message").innerHTML = message;
    showScores();
}

showScores();
