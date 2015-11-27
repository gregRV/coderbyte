function SwapCase(str) {
  // create list of lower case letters
  var lower = {
    'a' : 'A',
    'b' : 'B',
    'c' : 'C',
    'd' : 'D',
    'e' : 'E',
    'f' : 'F',
    'g' : 'G',
    'h' : 'H',
    'i' : 'I',
    'j' : 'J',
    'k' : 'K',
    'l' : 'L',
    'm' : 'M',
    'n' : 'N',
    'o' : 'O',
    'p' : 'P',
    'q' : 'Q',
    'r' : 'R',
    's' : 'S',
    't' : 'T',
    'u' : 'U',
    'v' : 'V',
    'w' : 'W',
    'x' : 'X',
    'y' : 'Y',
    'z' : 'Z'
  };
  var caps = {};
  for(var low in lower) {
    caps[lower[low]] = low;
  }

  // create list of capitals
  // for each char in the string
  var letters = str.split('');
    // swap cases and overwrite that place in string
  for (var i = 0; i < letters.length; i++) {
    if (lower[ letters[i] ]) {
      letters[i] = lower[ letters[i] ];
    } else if (caps[ letters[i] ]) {
      letters[i] = caps[ letters[i] ];
    }
  }
  // join and return string
  return letters.join('');
}

console.log(SwapCase('Hello-LOL'));
console.log(SwapCase('Sup DUDE!!?'));