// ADD CODE HERE
function countBy(array, callback){
  
  // Iterate through the array
  for (const element of array) {
    // Apply the callback function to get the category
    const category = callback(element);

    // Check if the category exists in the result object
    if (result.hasOwnProperty(category)) {
      // Increment the count for the category
      result[category]++;
    } else {
      // Initialize the count for the category to 1
      result[category] = 1;
    }
  }

  return result;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }