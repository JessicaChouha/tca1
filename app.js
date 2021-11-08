const userScore=0;
const computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementByIf("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices= ['r', 'p', 's'];
  console.log(Math.floor(Math.random()* 3);
  return choices[randomNumber];
}

function coonvertToWord(letter){
  if(letter=== "r") return "Rock";
  if(letter === "p") return "paper";
  return "scissors"; 
}


function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML=computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML= '$'{convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!;
}

function lose(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML=computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML= '$'{convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!;
}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML= '$'{convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. You draw!;
}


function game(userChoice){
  const computerChoice= getComputerChoice();
  switch (userChoice + computerChoice){
    case "rp";
    case "pr";
    case "sp";
      console.log("USER WINS.");
      break;
    case "rp";
    case "ps";
    case "sr";
      console.log("USER LOSES.");
      break;
    case "rr";
    case "pp";
    case "ss";
      console.log("It's a draw");
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function()){
    game("r");
  })

 paper_div.addEventListener('click', function()){
    game("p");
})
scissors_div.addEventListener('click', function()){
   game("s");
})
}

main();
