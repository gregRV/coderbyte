function diamond(n){
  if (n % 2 === 0 || n < 3) return null;

  // the middle of the diamon has N *'s with no whitespace
  // each line above and below has N = N-2 *'s until N = 1

  // for each line, print N-current whitespace
    // divide that whitespace by 2, and place *'s in between

  // build up
  var rowStarCount = 1;
  var rowWhiteSpace = 0;
  var diamond = '';

  while (rowStarCount <= n) {
    rowWhiteSpace = (n - rowStarCount) / 2;
    diamond += repeatString(' ', rowWhiteSpace) + repeatString('*', rowStarCount) + repeatString(' ', rowWhiteSpace) + '\n';
    rowStarCount += 2;
  }

  // build down

  //   *
  //  ***
  // *****
  //  ***
  //   *

  console.log(diamond);
}

function repeatString(str, n) {
  var result = '';
  for (var i=0; i < n; i++) {
    result += str;
  }
  return result;
}

// TESTS
// console.log(diamond(3) === " *\n***\n *\n");
diamond(3);
// console.log(diamond(2) === null);
// console.log(diamond(-3) === null);
// console.log(diamond(0) === null);