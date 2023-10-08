let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  setTimeout( () => {console.log(database[id]);}, id);
}

// Also add code here
function storeData(data){
  dataReceived = data;
}

const result = ajaxSimulate(1, storeData);
console.log(result);