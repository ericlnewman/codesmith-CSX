// ADD CODE HERE
function goodKeys(object, callback){
  const result = [];
  for(let key in object){
    if(callback(object[key])){
      result.push(key);
    }
  }
  return result;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']