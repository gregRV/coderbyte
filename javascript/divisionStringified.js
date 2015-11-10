function DivisionStringified(num1,num2) {
  var quotient = Math.round(num1 / num2).toString();
  if (quotient.length <= 3) {
    return quotient
  }
  else {
    quotient = quotient.split('').reverse();
    var withCommas = '';
    var commaCount = 1;
    for (var i=0; i < quotient.length; i++) {
      if (commaCount === 4) {
        withCommas += ',';
        commaCount = 1;
      }
      withCommas += quotient[i];
      commaCount += 1;
    }
    return withCommas.split('').reverse().join('');
  }
}

console.log( DivisionStringified(123456, 100) === "1,235" );
console.log( DivisionStringified(123456789, 100) === "1,234,568" );