function mergingTripletsAndQuints(array1, array2) {
 // ADD CODE HERE
  let array3 = [];
  for(let i = 0; i < array1.length; i++){
    if(array1[i] % 3 == 0 || array1[i] % 5 == 0){
      array3.push(array1[i]+=array2[i]);
    } else {
      array3.push(array1[i]);
    }
  }
  return array3;
}

// Uncomment these to check your work!
 console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
 console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]