// 1. Define a function that creates a range of numbers between 'lower' and 'upper'.
function createNumberRange(lower, upper) {
  const result = [];
  for (let i = lower; i <= upper; i++) {
    result.push(i);
  }
  return result;
}

// 2. Define a function that converts a string to uppercase and appends exclamation marks.
function addExclamationMarks(str, num) {
  const uppercaseStr = str.toUpperCase();
  const exclamationMarks = '!'.repeat(num);
  return uppercaseStr + exclamationMarks;
}

// 3. Define a function that adds minutes to a given time in 24hr format.
function addMinutesToTime(time, minutes) {
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr);
  let minute = parseInt(minuteStr);

  // Add the minutes
  minute += minutes;

  // Adjust hours and minutes if necessary
  hour += Math.floor(minute / 60);
  minute %= 60;

  // Normalize hour to a 24-hour format
  hour %= 24;

  // Format the time strings with leading zeros
  const formattedHour = hour < 10 ? `${hour}` : `${hour}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  // Handle the case when hour is 0
  if (formattedHour === '0') {
    return `00:${formattedMinute}`;
  }

  return `${formattedHour}:${formattedMinute}`;
}

module.exports = {
  a: createNumberRange,
  b: addExclamationMarks,
  c: addMinutesToTime
};
