const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}; 

updateScoreElement();

let isAutoPlaying = false;
let intervalId;


  function autoplay() {
    if (!isAutoPlaying) {
   intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove); 
    }, 3000);

    isAutoPlaying = true;
  }
  else{ 
    clearInterval(intervalId);
    isAutoPlaying = false;
  } 
  
  
}




function playGame(playerMove) 
{
  const computerMove = pickComputerMove();
  let Result = '';
  if (playerMove === 'ROCK') 
  {
  if (computerMove === 'ROCK') {Result = 'Its a Tie';}
  else if (computerMove === 'PAPER') {Result = 'You lose!';}
  else if (computerMove === 'SCISSORS') {Result = 'You win!';}  
  } 
  
  else if (playerMove === 'PAPER') 
  { if (computerMove === 'ROCK') {Result = 'You win!';}
  else if (computerMove === 'PAPER') {Result = 'Its a Tie';}
  else if (computerMove === 'SCISSORS') {Result = 'You lose!';}}
 

 else if (playerMove === 'SCISSORS') 
 {if (computerMove === 'ROCK') {Result = 'You lose!';}
else if (computerMove === 'PAPER') {Result = 'You win!';}
else if (computerMove === 'SCISSORS') {Result = 'Its a Tie';}}

if (Result === 'You lose!') {score.losses += 1;}
else if (Result === 'You win!') {score.wins += 1;}
else if (Result === 'Its a Tie') {score.ties += 1;}

localStorage.setItem ('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = Result;

document.querySelector('.js-move').innerHTML = 
`you picked <img src="RPS-images/${playerMove}-emoji.png" alt="ROCK" class="move-icon"> <br>
Computer picked <img src="RPS-images/${computerMove}-emoji.png" alt="ROCK" class="move-icon"> `;

}


function updateScoreElement() {document.querySelector('.js-score').innerHTML = 
`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  
}


function pickComputerMove() {
 const randomNumber = Math.random ();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {computerMove= 'ROCK';}
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {computerMove='PAPER';}
  else if (randomNumber >= 2/3 && randomNumber < 1) {computerMove='SCISSORS';}
 
  return computerMove;
}
