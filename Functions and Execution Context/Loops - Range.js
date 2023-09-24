function getTheRange(arr){
  // ADD CODE HERE
  let low = arr[0];
  let high = arr[0];
  let range = [];
  for(let num in arr){
    if(low > arr[num]){
      low = arr[num];
    }
    if(high < arr[num]){
      high = arr[num];
    }
  }
  let dif = high - low;
  range.push(low, high, dif);
  return range;
}

// Uncomment these to check your work!
 console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]