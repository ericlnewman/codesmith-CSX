// Add code here
function forEach(arr, cb){
  const len = arr.length;
  let result = [];
  for(let i = 0; i < len; i++){
    result = cb(arr[i], i);
  }
  
  return result;
}

const delays = [200, 500, 0, 350];

function delayLog(delayTime, i){
  setTimeout( () => {console.log("printing element " + i);}, delayTime);
}
const ans = forEach(delays, delayLog);
console.log(ans);