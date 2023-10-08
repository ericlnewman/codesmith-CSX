function getTheRange(arr){
  // ADD CODE HERE
  let low = arr[0];
  let high = arr[0];
  for(let i of arr){
    if(i < low){
      low = i;
    }
    if(i > high){
      high = i;
    }
  }
  const difference = high - low;
  const newArray = [low, high, difference];
  return newArray;
}

// Uncomment these to check your work!
 console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
