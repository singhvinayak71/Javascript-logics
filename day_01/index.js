// 1: Write a function that takes a number as input and return the sum of its digits.

// const sumDigits = (num) => {
//   let arr = Array.from(String(num), Number);
//   console.log(arr);

//   return arr.reduce((a, b) => a + b);
// };

// // Example uses
// console.log(sumDigits(1234));
// console.log(sumDigits(1564));
// console.log(sumDigits(15545));

// 2: write a function that take an array of integers as input and remove any duplicate elements, returning a new array with only the uniqe elements.

function removeDuplicates(arr) {
    let newArr = [...new Set(arr)]
    return newArr
}
console.log(removeDuplicates([1, 2, 3, 3, 5, 2, 5, 6]));
console.log(removeDuplicates([1, 2, 3, 38, 8, 6]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([89, 57, 57, 89, 76]));
