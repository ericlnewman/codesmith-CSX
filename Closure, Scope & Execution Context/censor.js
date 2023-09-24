// ADD CODE HERE
function censor(){
  const pair = [];
  return (firstString, secondString)=>{ 
    if(secondString !== undefined){
      pair.push(firstString);
      pair.push(secondString);
      return;
    }
    let newString = "";
   if(firstString.includes(pair[0]) && firstString.includes(pair[2])){
     let otherPart = firstString.split(pair[2]);
     let anotherPart = otherPart[1].split(pair[0]);
     newString = otherPart[0] + pair[3] + anotherPart[0] + pair[1] + anotherPart[1];
   }
  
    return newString;
  }
}
// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'