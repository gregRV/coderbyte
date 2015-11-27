// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(str) {
  // break string into array
  var numbers = str.split('');
  var next;
  // for each number
  for (var i=0; i < numbers.length; i++) {
  next = numbers[i + 1];
    // look at next number (if one exists)
    if (next && numbers[i] % 2 !== 0 && next % 2 !== 0) {
      // if odd, add dash
    numbers[i] += '-';
    }
  }

  // join array, then return array
  return numbers.join('');
}
