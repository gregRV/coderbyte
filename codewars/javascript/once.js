function once(fn) {
  var hasBeenCalled = false;
  return function() {
    if (hasBeenCalled) {
      return undefined;
    } else {
      hasBeenCalled = true;
      return fn.apply(null, arguments);
    }
  };
}

var testFn = function(arg) {
  return arg;
};

var onceExample = once(testFn);
console.log(onceExample('test') === 'test');
console.log(onceExample('test') === undefined);
