// ADD CODE HERE
function pluralize(array){
  let newArray = [];
  for(let element of array){
			newArray.push(element + "s");
  }
  return newArray;
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
 console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]