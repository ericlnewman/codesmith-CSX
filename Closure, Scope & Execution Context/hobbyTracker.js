function hobbyTracker(hobbies) {
  const cache = {};
  let num = 0
  return (hobby, i) => {
    if(hobby === undefined){
      for(let value in cache){
        cache[value] = 0;
      }
      return "tracker has been reset!";
    }
    cache[hobby] = (cache[hobby] || 0) + i;
    return cache;
  }
  
}




// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}