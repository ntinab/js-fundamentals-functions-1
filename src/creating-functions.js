// 1. Define a function that takes a number and increments it by 1.
function incrementNumber(num) {
  return num + 1;
}

// 2. Define a function that capitalises any string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
function greetWithSmiley(name) {
  const capitalized = capitalizeString(name);
  return `Hi, ${capitalized} :)`;
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
function countStrings(arr) {
  let count = 0;
  for (const item of arr) {
    if (typeof item === 'string') {
      count++;
    }
  }
  return count;
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
function addEdwardProperty(obj) {
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing';
  }
  return obj;
}

module.exports = {
  a: incrementNumber,
  b: capitalizeString,
  c: greetWithSmiley,
  d: countStrings,
  e: addEdwardProperty
};
