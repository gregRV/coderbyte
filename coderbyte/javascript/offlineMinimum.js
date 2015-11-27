function OffLineMinimum(strArr) {
  // init empty array "options" of items to select from
  var options = [];
  // init empty array results
  var results = [];

  // for each in strArr
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      options.push(strArr[i]);
      options = options.map(function(a){
        if (a !== undefined) {
          return a;
        }
      })
      .sort(function(a,b){
        return a > b;
      });

      results.push( options.shift() );
    } else {
      options.push(strArr[i]);
    }
  }

  return results.join(',');
}

console.log( OffLineMinimum([ "1","2","E","E","3"]) );
console.log( OffLineMinimum([ "4","E","1","E","2","E","3","E"]) );
