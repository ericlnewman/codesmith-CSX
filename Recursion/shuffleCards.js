function shuffleCards(topHalf, bottomHalf,  arr = [], i = 0) {
  // YOUR CODE HERE
  if(i === topHalf.length) return arr;
  if(bottomHalf[i] === undefined) arr.push(topHalf[i])
  else {arr.push(topHalf[i], bottomHalf[i]);}
  return shuffleCards(topHalf, bottomHalf, arr, i+=1)
//   // solving it iteratively:
//   	// declare an empty array to hold each element
//   	// iterate through the largest array
//   	if(topHalf.length > bottomHalf.length){
//       len = topHalf.length;
//     } else {
//       len = bottomHalf.length;
//     }
//    for(let i = 0; i < len; i++){
//      // add one element from the top half first, then add the bottom half element next
//      newArray.push(topHalf[i]);
//      if(bottomHalf[i] === undefined){
//        continue;
//      }
     
//      newArray.push(bottomHalf[i]);
//    }
//   // return the new array
//   return newArray;
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
