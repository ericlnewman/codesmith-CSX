const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for(let i in sumMe){
  if(sumMe[i] *1 === sumMe[i]){
    total+=sumMe[i];
  }
}
console.log(total);