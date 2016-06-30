// add to toy projects repo!

var numbers = [1, 7, 3, 4]; // [84, 12, 28, 21]

function getProducts(numbers) {
  return numbers.map(function(number, index) {
    return numbers.filter(function(number, idx){
      return index !== idx;
    })
    .reduce(function(memo, current) {
      return memo * current;
    });
  });
}

getProducts(numbers);

// var prodsToReturn = [];
// numbers.forEach(function(number, index) {
//   var numbersCopy = numbers.slice();
//   var numbersToReduce = numbersCopy.filter(function(number, idx){
//     return index !== idx;
//   });
//   var product = numbersToReduce.reduce(function(memo, current) {
//     return memo * current;
//   });
//   prodsToReturn.push(product);
// });
// return prodsToReturn;
