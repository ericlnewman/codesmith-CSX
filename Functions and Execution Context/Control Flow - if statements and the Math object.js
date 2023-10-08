function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  let difference1;
  let difference2;
  if(player1 < theMark){
    difference1 = theMark-player1;
  } else {
    difference1 = player1-theMark;
  }
  if(player2 < theMark){
    difference2 = theMark-player2;
  } else {
    difference2 = player2-theMark;
  }
  if(difference1 < difference2){
    return "Player 1 is closest";
  }
  return "Player 2 is closest";
}

// Uncomment the line below to check your work!
 console.log(closestToTheMark(25, 75));
