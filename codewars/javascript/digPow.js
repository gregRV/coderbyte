function digPow(n, p){
  // split n into individual numbers
  var singleDigits = (n).toString().split('');
  // add each number starting at given exponent p
  var sum = 0;
  singleDigits.forEach(function(number){
    // each sucessive number should be ^p+1
    sum += Math.pow(number, p);
    p += 1;
  });

  // with above sum, check if is divisible by n
  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1) === 1);
console.log(digPow(92, 1) === -1);
