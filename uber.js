function perfectCity(departure, destination) {
  var result = 0;
  // get diff of x's
  var dx = Math.abs(destination[0] - departure[0]);
  // get diff of y's
  var dy = Math.abs(destination[1] - departure[1]);
  // add diffs together and return as result
  result = dx + dy;

  console.log('result:', result);
  return result;
}


// TEST CASES
// console.log(perfectCity([1,1], [3,1]) === 2);
// console.log(perfectCity([1,1], [3,3]) === 4);
// console.log(perfectCity([3,3], [1,1]) === 4);
// console.log(perfectCity([4,3], [3,4]) === 2);
// console.log(perfectCity([2,2.5], [4,4.5]) === 4);
console.log(perfectCity([2, 2.5], [3.8, 4]) === 3.3);