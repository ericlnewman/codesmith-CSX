function arrayBuilder(obj) {
  // ADD CODE HERE
  let arr = [];
	for(let key in obj){
    if(obj.hasOwnProperty(key)){
      let n = 0;
      while(n < obj[key]){
        arr.push(key);
        n++;
      }
    }
  }
  return arr;
}

// Uncomment these to check your work!
 console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []