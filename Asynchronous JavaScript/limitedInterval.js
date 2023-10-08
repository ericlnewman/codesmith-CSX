// Add code here
function limitedInterval(callback, wait, limit){
  const interval = () => {
    const secs = limit /100;
    for(let i = 1; i < secs; i++){
      setTimeout(callback, wait);
    } 
  };
  interval();

}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
// setTimeout( () => { setTimeout(()=>{callback}, wait)}, limit)
// setInterval(callback, limit, wait);