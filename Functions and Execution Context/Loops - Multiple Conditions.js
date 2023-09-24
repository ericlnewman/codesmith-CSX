function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  let arr = [];
  let sumOfOdd = 0;
  let sumOfEven=0;
  for(let i = 0; i < array2.length; i++){
    if(!(array2[i] % 2 == 0)){
      sumOfOdd+=array2[i];
    }
    if(array2[i] % 2 == 0){
      sumOfEven+=array2[i];
    }
  }
  for(let i = 0; i < array1.length; i++){
    if(array1[i] < 10){
      arr.push(sumOfOdd+array1[i]);
    } else if(array2[i] >= 20){
      arr.push(++array1[i]);
    } else {
      arr.push(sumOfEven+array1[i]);
    }
  }
  return arr;
}

// Uncomment these to check your work!
 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
