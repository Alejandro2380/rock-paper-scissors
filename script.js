 // generate one of three items
  // ask for player item selection
  // determine winner by values
  // return statement with winner and loser included

  let item;
  let compChoice;
  let playerPoints = 0;
  let compPoints = 0;
  let responseOne = " ";
  let responseTwo = " ";

  function game (selection){
    for (let i = 1; i < 5; i++){
      computerSelection();
      playRound(selection);
    
      document.getElementById('responseOne').innerHTML = responseOne;
      
    }

   if(playerPoints === compPoints){
     responseTwo = "YOU BOTH HAVE TIED WITH " + compPoints + " POINTS! ";

   } else if (playerPoints > compPoints){
       responseTwo = "CONGRATULATIONS, YOU WIN BY " + (playerPoints - compPoints) + " POINTS. FINAL SCORE: " + playerPoints + " TO " + compPoints;

   } else if (compPoints > playerPoints) {
       responseTwo = "SORRY, YOU LOSE BY "  + (compPoints - playerPoints)  + " POINTS. FINAL SCORE: " + compPoints + " TO " + playerPoints;
   }
  
   
   document.getElementById('responseTwo').innerHTML = responseTwo;
}


   function computerSelection(playerSelection){
     item =  Math.round((Math.random(.80))* 100) / 100;

    if(item >= 0.52){
       compChoice = 'rock';
    } else if (item >= 0.27 && item <= 0.51 ){
      compChoice ='scissors';
    }   else if (item <= 0.26)  {
           compChoice ='paper';
    }

  }

  function playRound(playerSelection){

    let playerAnswer = playerSelection.toLowerCase();


    if(playerAnswer === compChoice){
        responseOne=  "Too Bad so Sad Noone One!";
        return;

    } else if(playerAnswer === "scissors"){
        if(compChoice === 'paper'){
          playerPoints += 1;
          responseOne=" You Win scissors always beats paper";
            return;

        } else if (compChoice === "rock") {
        compPoints += 1;
        responseOne= " You Lose Rock always beats scissors";
       return;
          
        }
      } 

      if (playerAnswer === "rock"){
          if(compChoice === 'paper'){
            compPoints += 1;
            responseOne= " You Lose Paper always beats rock";
            return;

          } else if (compChoice === 'scissors'){
            playerPoints += 1;
            responseOne= " You Win rock always beats scissors";
            return;
            }
      }  

        if(playerAnswer === "paper"){
            if(compChoice === 'scissors'){
              compPoints += 1;
              responseOne= " You Lose scissors always beats paper";
            return;

            } else if (compChoice === 'rock') {
            playerPoints += 1;
            responseOne= " You Win paper always beats rock";
            return;
            }
        }
    
    }



  