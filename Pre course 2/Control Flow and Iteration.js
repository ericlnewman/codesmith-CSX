const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
function greaterThan10(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] >= 5){
      array[i] *= 10;
    }
  }
  return array;
}

// Uncomment the line below to check your work!
console.log(greaterThan10(timesTenIfOverFive)); // -> should print [230, 90, 110, 2, 100, 60]