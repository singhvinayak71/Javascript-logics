// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.


const matches = (obj, source) =>
  // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// Test cases:
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
