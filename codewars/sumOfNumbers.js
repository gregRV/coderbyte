// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

function GetSum( a,b ) {
  if (a === b) return a;

  var sum = 0;
  var i = a < b ? a : b;
  var end = a < b ? b : a;

  for (i; i <= end; i++) {
   sum += i;
  }

  return sum;
}

console.log(GetSum(5,-1) === 14);
console.log(GetSum(1,1) === 1);
console.log(GetSum(-2,3) === 3);
