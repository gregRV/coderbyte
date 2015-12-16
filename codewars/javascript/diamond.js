function diamond(n){
  // for each line, print N-current whitespace
  // divide that whitespace by 2, and place *'s in between

  // edge cases
  if (n % 2 === 0 || n < 3) return null;

  var rowStarCount = 1;
  var rowWhiteSpace = 0;
  var diamond = '';

  // build top half of diamond
  while (rowStarCount <= n) {
    rowWhiteSpace = (n - rowStarCount) / 2;
    diamond += repeatString(' ', rowWhiteSpace) + repeatString('*', rowStarCount) + '\n';
    rowStarCount += 2;
  }

  // build bottom half of diamond
  rowStarCount = n - 2;
  while (rowStarCount >= 1) {
    rowWhiteSpace = (n - rowStarCount) / 2;
    diamond += repeatString(' ', rowWhiteSpace) + repeatString('*', rowStarCount) + '\n';
    rowStarCount -= 2;
  }

  return diamond;
}

function repeatString(str, n) {
  var result = '';
  for (var i=0; i < n; i++) {
    result += str;
  }
  return result;
}

// TESTS
console.log(diamond(3) === " *\n***\n *\n");
console.log(diamond(2) === null);
console.log(diamond(-3) === null);
console.log(diamond(0) === null);
