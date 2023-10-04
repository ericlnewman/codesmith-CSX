function shuffleCards(topHalf, bottomHalf) {
  // YOUR CODE
  let newArray = [];
	let len = topHalf.length + bottomHalf.length;
 	if(newArray.length === len) return newArray;
  if(topHalf.length){
    newArray.push(topHalf[0]);
  }
  if(bottomHalf.length){
    newArray.push(bottomHalf[0]);
  }
  return newArray.concat(shuffleCards(topHalf.slice(1), bottomHalf.slice(1)));
}



// UNCOMMENT TO TEST YOUR WORK
 const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */