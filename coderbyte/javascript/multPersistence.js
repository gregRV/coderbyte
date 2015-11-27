// Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

function MultiplicativePersistence(num, splitCount) {
  // if num < 10, return 0
  if (num < 10) return 0;

  // init splitCount to 1 or value passed as arg
  splitCount = splitCount || 1;

  // split number into array of numbers
  var numbersList = String(num).split('');

  // multiply all numbers together
  var product = numbersList.reduce(function(memo, num){
    return memo * Number(num);
  }, 1);

  if (product > 9) {
    // call function again with new product and increment splitCount
    // reassign splitCount to be return value from recursive call
    splitCount = MultiplicativePersistence(product, splitCount+1);
  }

  return splitCount;
}

console.log(MultiplicativePersistence(25) === 2);
console.log(MultiplicativePersistence(4) === 0);
console.log(MultiplicativePersistence(10) === 1);
