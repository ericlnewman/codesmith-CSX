let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  if(friendsAvailable){
    return callFriend(true, name);
  } else {
    return callFriend(false, name);
  }
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if(bool === true){
    return "Plans made with " + name + " this weekend";
  }else{
    return "Everyone is busy this weekend";
  }
}

// Uncomment these to check your work!
 console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
 friendsAvailable = false;
 console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
