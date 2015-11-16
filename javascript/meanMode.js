function MeanMode(arr) {
  var mean = Number( getMean(arr) );
  var mode = Number( getMode(arr) );
  return mean === mode ? 1 : 0
}

function getMean(arr) {
  return (arr.reduce(function(memo, curr) {
    return memo + curr;
  }, 0) / arr.length);
}

function getMode(arr) {
  // create hash of number frequency
  var freq = arr.reduce(function(memo, curr) {
  if (memo[curr]) {
      memo[curr] += 1;
  } else {
      memo[curr] = 1;
  }
  return memo;
  }, {});

  // return key with highest frequency
  var mostFreq = null;
  var val = 0;
  for (var num in freq) {
    if (freq[num] > val) {
      val = freq[num];
      mostFreq = num;
    }
  }

  return mostFreq;
}
