// Given a non-negative integer, return an array containing a list of independent digits in reverse order.

function digitize(n) {
  var reversedArrayofStrings = n.toString().split('').reverse();
  return reversedArrayofStrings.map(function(numStr){
    return Number(numStr);
  });
}
