function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  
  if(theMark > player1 && theMark > player2){
    let dif1 = theMark - player1;
    let dif2 = theMark - player2;
    if(dif1 > dif2){
      return "Player 2 is closest";
    } else {
      return "Player 1 is closest";
    }
  }
  if(theMark > player1 && theMark < player2){
    let dif1 = theMark - player1;
    let dif2 = player2 - theMark;
    if(dif1 > dif2){
      return "Player 2 is closest";
    } else {
      return "Player 1 is closest";
    }
  }
    if(theMark < player1 && theMark > player2){
    let dif1 = player1 - theMark;
    let dif2 = theMark - player2;
    if(dif1 > dif2){
      return "Player 2 is closest";
    } else {
      return "Player 1 is closest";
    }
    }
    if(theMark < player1 && theMark < player2){
    let dif1 = player1 - theMark;
    let dif2 = player2 - theMark;
    if(dif1 > dif2){
      return "Player 2 is closest";
    } else {
      return "Player 1 is closest";
    }
  }
}

// Uncomment the line below to check your work!
 console.log(closestToTheMark(25, 75));
