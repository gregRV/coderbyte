// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  // base case - empty names list
  if (names.length === 0) return '';

  // base case - single name
  if (names.length === 1) {
    return names[0].name;
  }

  // init empty string 'result' to return
  var result = '';
  var current;

  // build string until final two names
  while (names.length > 2) {
    // append the name to the result string
    current = names.shift();
    result += current.name + ', ';
  }

  // create string 'finalTwoNames' and manually add those to 'result' string
  var finalTwoNames = names[0].name + ' & ' + names[1].name;

  return result + finalTwoNames;
}


// TESTS
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
