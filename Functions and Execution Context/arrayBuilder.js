function arrayBuilder(obj) {
  // ADD CODE HERE
  const result = [];
  for(let o in obj){
    for(let i = 0; i < obj[o]; i++){
      result.push(o);
    }
  }
  return result;
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
 console.log(arrayBuilder({})); // => []
