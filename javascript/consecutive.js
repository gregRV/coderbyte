function Consecutive(arr) {
  var sorted = arr.sort(function(a,b){
    return a > b;
  });

  var start = sorted[0];
  var end = sorted[sorted.length-1];
  var range = end - start;

  return range - sorted.length + 1;
}

console.log( Consecutive([4, 8, 6]) === 2 );
console.log( Consecutive([1,2,3,100]) === 96 ); // (?)