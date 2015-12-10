// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var chars = str.toLowerCase().split('');
  var uniqueChars = {};
  var noRepeats = true;

  chars.forEach(function(char){
    if (uniqueChars[char]) {
      noRepeats = false;
    } else {
      uniqueChars[char] = true;
    }
  });

  return noRepeats;
}

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case