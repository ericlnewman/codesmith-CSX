function Dog(name, breed) {
	// add code here
  const dog = {
    name: name,
    breed: breed
  };
  Dog.tricks = [];
  Dog.prototype.learnTrick = (trick)=>{
    if(!(Dog.tricks.includes(trick))){
      Dog.tricks.push(trick);
    }
  }
  Dog.prototype.performTrick = (trick) => {
     if(Dog.tricks.includes(trick)){
    console.log(name + " performed"+trick+"!");
    } else {
      console.log(name + " doesn't know that trick");
    }
  }
}
const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
fido.learnTrick('fetch');
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'

/*
function Dog(name, breed) {
	// add code here
	const dog = new Dog(name, breed);
  this.tricks = [];
}
Dog.prototype.learnTrick = (trick) =>{
  dog.tricks.push(trick);
}
Dog.prototype.performTrick = (trick) => {
  if(dog.tricks.includes(trick)){
    console.log(this.name + " performed trick!");
  } else {
    console.log(this.name + " doesn't know that trick");
  }
}
*/