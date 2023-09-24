// ADD CODE HERE
function createFunction(){
  function newFunction(){
    let hi = 'hello world';
    return hi
  }
  return newFunction;
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'