function arrToObj(array, callback) {
  // ADD CODE HERE
  const obj = {};
  let upperCase;
  for(let i = 0; i < array.length; i++){
    upperCase = callback(array[i]);
    obj[array[i]] = upperCase;
  }
  return obj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }