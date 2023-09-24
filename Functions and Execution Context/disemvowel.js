function disemvowel(string) {
  // ADD CODE HERE
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      string = string.replace(string[i], "");
      i--; // Decrement i to re-check the current position
    }
  }
  
  return string;

}

// Uncomment these to check your work!
 console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
 console.log(disemvowel('hello world')); // => 'hll wrld'