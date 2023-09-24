let calls = "";

function jerry(str) {
  calls="Jerry";
  calls+=kramer(calls);
	return calls;
}

function george(str) {
	calls="George";
  calls+=elaine(calls);
  return calls;
}

function elaine(str) {
	calls="Elaine";
  return calls;
}

function kramer(str) {
	calls="Kramer";
  calls+=george(calls)
  return calls;
}


// Uncomment these to check your work!
 calls = jerry(calls);
 console.log(calls); // should log: 'JerryKramerGeorgeElaine'