// ADD CODE HERE
function prioritize(array, callback){
  let newArray = [];
  for(let index in array){
    newArray.push(callback(index));
  }
  return newArray;
}
// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']