// Have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together,
// then return that final number.
// For example: if str is "88Hello 3World!" the output should be 91.

function NumberAddition(str) {
  var onlyNumbers = str.replace(/[^0-9\.]+/g, ' ');
  return onlyNumbers.split(' ').reduce(function(memo, num) {
    return memo + Number(num);
  }, 0);
}

console.log( NumberAddition('75Number9') === 84 );
console.log( NumberAddition("10 2One Number*1*") === 13 );