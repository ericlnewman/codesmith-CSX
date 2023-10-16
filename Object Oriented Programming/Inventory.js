function Inventory(item, price) {
  // add code here
  this[item] = {price: price, quantity: 1 };
  Inventory.prototype.addItem = (item, price) => {
    if(this[item]){
      this[item].quantity++;    // this must first check if this particular key item exists

      this[item].price = price;
    } else {
      this[item] = {price: price, quantity: 1};
    }
  };
  Inventory.prototype.deleteItem = (item) => {
    if(this[item]){
      if(this[item].quantity >= 1){
        this[item].quantity--;
        return "Deleted";
      } else {
      return "Nothing to delete";
    	}
    } 
  };
  Inventory.prototype.checkItem = (item) => {
    if(this[item]){
      return this[item];
    }
    return "Item is not in inventory";
  };
  
}

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
