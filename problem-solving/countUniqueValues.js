/**
 * Implement a function which accepts a sorted array, count the unique values in
 * the array. If none then return 0.
 */

const countUniqueValues = arr => {
  if (arr.length === 0) return 0;

  let lastSameNum = arr[0];
  let uniqueCounter = 1;

  for (let j = 1; j < arr.length; j++) {
    if (lastSameNum !== arr[j]) {
      uniqueCounter++;
      lastSameNum = arr[j];
    }
  }

  return uniqueCounter;
};

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7]));
console.log(countUniqueValues([1, 2, 3, 3, 5, 5, 5, 6, 7]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1]));
console.log(countUniqueValues([]));
