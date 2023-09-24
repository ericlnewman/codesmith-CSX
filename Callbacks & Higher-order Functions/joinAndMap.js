// ADD CODE HERE
function joinAndMap(array1, array2, callback){
  let newArray = [];
  let red;
  let blue;
  for(let i = 0; i < array1.length; i++){
    red = callback(array1[i]);
    newArray.push(red);
  }
  for(let i = 0; i < array2.length; i++){
    blue = callback(array2[i]);
    newArray.push(blue);
  }
  return newArray;
}
// Uncomment these to check your work!
// const arrRed = ['strawberry', 'cherry', 'wine'];
// const arrBlue = ['blueberry', 'sky', 'ocean'];
// const capitalize = str => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']