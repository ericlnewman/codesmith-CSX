// ADD CODE HERE
function defineFirstArg(func, arg){
  const savedArg = arg;
  return (...arg) =>{
    return func(savedArg, ...arg);
  }
}
// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15