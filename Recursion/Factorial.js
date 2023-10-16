function factorial(num, cache ={}) {
  // create a cache object to remember the calls
  // if the cache is already containing the key, return the key
  if(cache[num]) return cache[num];
	// if num is equal to 1 return num
  if(num === 1) return num;
  // else recursive call to num multiplied by the factorial of num take away 1
  // make the current num the key and the value the recursive call
  cache[num] = num * factorial(num-1, cache)
  // return the cache key
  return cache[num];
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
