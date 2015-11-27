function CountingMinutesI(str) {
  // solve for times w/in same range (AM or PM, not both) - DONE
  // solve for times in different range - DONE
  // solve for times in same range BUT after is "earlier" than before (whole day)

  // split the two times in the arg by the hyphen
  var times = str.split('-');

  // figure out the hour diff
  var hourDiff = getHourDiff(times);

  // figure out the minute diff
  var minuteDiff = getMinuteDiff(times);

  return hourDiff + minuteDiff;
}

// getHourDiff helper fx
// accepts 2 times as strings
// parse for the hours
// return the difference x 60

// if times are in diff ranges
// add together the diff of 12 - before and after
function getHourDiff(times) {
  var before = parseInt( times[0].split(':')[0] );
  var after = parseInt( times[1].split(':')[0] );

  var periods = getPeriod(times);
  var beforePeriod = periods[0];
  var afterPeriod = periods[1];

  if (beforePeriod !== afterPeriod) {
    before = 12 - before;
    return (before + after) * 60;

  } else if(before >= after) {
    if (getMinuteDiff(times) <= 0) {
      return (24 - (before - after)) * 60;
    }

  } else {
    return (after - before) * 60;
  }
}

// getMinuteDiff helper fx
// accepts 2 times as strings
// parse for the minutes
// return the diff
function getMinuteDiff(times) {
  var before = parseInt( times[0].split(':')[1].substr(0,2) );
  var after = parseInt( times[1].split(':')[1].substr(0,2) );

  return after - before;
}

// helper to retrieve the two periods (AM or PM)
function getPeriod(times) {
  var beforePeriod = times[0].charAt(times[0].length-2);
  var afterPeriod = times[1].charAt(times[1].length-2);
  return [beforePeriod, afterPeriod];
}

console.log( CountingMinutesI("6:00am-7:00am") === 60 );
console.log( CountingMinutesI("8:00am-10:00am") === 120 );
console.log( CountingMinutesI("8:00am-1:00pm") === 300 );
console.log( CountingMinutesI("8:00am-5:00pm") === 540 );
console.log( CountingMinutesI("8:00am-6:00am") === 1320 );
// "2:03pm-1:39pm    broken
// "12:31pm-12:34pm" broken
// "5:00pm-5:11pm"   broken

// CountingMinutesI(readline());
