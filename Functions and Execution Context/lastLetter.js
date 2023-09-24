function lastLetter(word) {
  // INSERT CODE HERE
  let num = word.length-1;
  let letter = word[num];
  return letter;
}

// Uncomment the lines below to test your code
 console.log(lastLetter("hello")); //=> "o"
 console.log(lastLetter("goodbye!")); //=> "!"
 console.log(lastLetter("ZeltoiD")); //=> "D"
 console.log(lastLetter("I love Javascript")); //=> "t"