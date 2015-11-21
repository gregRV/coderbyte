// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.

function ThirdGreatest(strArr) {
  // sort the array by string length
  // return the third element
  var sorted = strArr.sort(function(a,b) {
    return a.length > b.length;
  });
  var index = 2;
  var greatest = sorted[index];
  console.log('greatest:', greatest);
  while ((index + 1 < sorted.length) && (sorted[index].length === sorted[index + 1].length)) {
    index += 1;
    greatest = sorted[index];
    console.log('new greatest:', greatest);
  }
  console.log('returning:', greatest, '\n');
  return greatest;
}

console.log( ThirdGreatest(["abc","defg","z","hijk"]) ); // abc
console.log( ThirdGreatest(["coder","byte","code"]) ); // code
console.log( ThirdGreatest(["hello", "world", "after", "all"]) ); // after