// ADD CODE HERE
function cycleIterator(array){
  let counter = 0;
  return ()=>{
    const element = array[counter];
    counter++;
    if(counter === array.length){
      counter = 0;
    }
    return element;
  }
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'