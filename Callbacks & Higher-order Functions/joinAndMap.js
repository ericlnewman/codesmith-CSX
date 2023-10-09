// ADD CODE HERE
function joinAndMap(array1, array2, callback){
  const newArray = [...array1, ...array2];
  const result = [];
  for(let i of newArray){
    result.push(callback(i));
  }
  return result;
}
// Uncomment these to check your work!
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']
