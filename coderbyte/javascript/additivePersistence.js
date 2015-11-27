function AdditivePersistence(num, splitCount) {
  if (num < 10) return 0;

  splitCount = splitCount || 1;
  var singleDigits = String(num).split('');
  var sum = singleDigits.reduce(function(memo, num){
    return memo + Number(num);
  }, 0);

  // if sum length is greater than 2, increment splitCount and repeat process
  if (sum > 9) {
    splitCount = AdditivePersistence(sum, splitCount+1);
  }

  return splitCount;
}

console.log(AdditivePersistence(19));
console.log(AdditivePersistence(2718));