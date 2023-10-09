function disemvowel(string) {
  // ADD CODE HERE
  let result = [];
  for(let i = 0; i < string.length; i++){
    const s = string[i];
    if(!(s === 'a' || s === 'A' || s === 'e' || s === 'i' || s === 'o' || s === 'u')){
      result.push(s);
    }
  }
  return result.join("").toString();
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
 console.log(disemvowel('hello world')); // => 'hll wrld'
