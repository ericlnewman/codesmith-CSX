class Chain {
	// add code here
  constructor(name){
    this.name = name;
    this.totalStores = 0;
    this.locations = [];
  };
  openStore(owner, location){
    const franchise = new Franchise(owner, location);
    this.locations.push(franchise);
    this.totalStores++;
  };
  closeStore(location){
   for(let i = 0; i < this.locations.length; i++){
     const current = this.locations[i].city;
     if(current === location){
       this.locations.splice(i,1);
       this.totalStores--;
       console.log(this.name + " closed the store in " + location+"!")
       return;
     }
    }
    console.log(this.name + " doesn\'t have a store in " + location);
    return;
  };
}

class Franchise {
    //add code here
  	constructor(owner, city){
      this.owner = owner;
      this.city = city;
    }
}


const buenoBell = new Chain('Bueno Bell');

// Uncomment these lines to check your work!
buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell.totalStores); //should log 3
console.log(buenoBell.locations[0].owner) //should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
