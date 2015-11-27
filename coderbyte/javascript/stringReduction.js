// Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.

function StringReduction(str) {
  // establish swap dictionary
  var dict = {
    'ab': 'c',
    'ba': 'c',
    'bc': 'a',
    'cb': 'a',
    'ac': 'b',
    'ca': 'b'
  };

  var chars = str.split('');
  var currentPair;
  var swapped = false;
  // iterate over string
  // for (var i = 0; i < chars.length; i++) {
  var stillSwaps = true;
  var i = 0;
  while (stillSwaps) {
    // start iteration over if a swap occurred
    if (swapped) {
      i = 0;
      swapped = false;
    }

    currentPair = chars[i] + chars[i+1];
    // if you encounter a pair from the dictionary
    if (dict[currentPair]) {
      // swap
      chars[i] = dict[currentPair];
      chars[i+1] = '';
      // filter empty strings from chars
      chars = chars.filter(function(c) {
        return c !== '';
      });
      swapped = true;
    }

    i += 1;
    if (i > chars.length) break;
  }

  // return swapped string length
  return chars.join('').length;
}

console.log( StringReduction('abcabc') === 2 ); // 2
console.log( StringReduction('cccc') === 4 ); // 4
console.log( StringReduction('bcab') === 1 ); // 1
console.log( StringReduction('aabc') === 1); // 1