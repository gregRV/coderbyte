function myParseInt(str) {
  var trimmedString = str.trim();
  if (trimmedString.split(' ').length > 1) return NaN;
  if (trimmedString.split('.').length > 1) return NaN;

  return Number(trimmedString);
}

// Test.assertEquals(myParseInt("1"), 1);
// Test.assertEquals(myParseInt("  1 "), 1);
// Test.assertEquals(myParseInt("08"), 8);
// Test.expect(isNaN(myParseInt("5 friends")));
// Test.expect(isNaN(myParseInt("16.5")));
// Test.expect(isNaN(myParseInt("*")));
