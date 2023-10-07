function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  
  return person;
}

const mike = personFromConstructor('Mike', 30);

// add code here
PersonConstructor.prototype.introduce = () => console.log("Hi, my name is " + mike.name);
// Uncomment this line to check your work!
 mike.introduce(); // -> Logs 'Hi, my name is Mike'