function myParseInt(str) {
  var numbers = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    0: true
  };
  var trimmedString = str.trim();
  var containsNonNumber = false;

  for (var i=0; i < trimmedString.length; i++) {
    if (!numbers[trimmedString[i]]) containsNonNumber = true;
  }

  return containsNonNumber ? NaN : Number(trimmedString);
}

// Test.assertEquals(myParseInt("1"), 1);
// Test.assertEquals(myParseInt("  1 "), 1);
// Test.assertEquals(myParseInt("08"), 8);
// Test.expect(isNaN(myParseInt("5 friends")));
// Test.expect(isNaN(myParseInt("16.5")));
// Test.expect(isNaN(myParseInt("*")));
