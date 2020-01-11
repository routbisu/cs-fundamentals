/**
 * Given a sorted array, write a function sumZero which accepts a sorted
 * array of integers. The function should find the first pair where the sum
 * is 0. Return an array that includes both values that sum to zero or undefined
 * if a pair does not exist.
 */

const sumZero = arr => {
  // Edge case
  if (arr[0] > -1) {
    return undefined;
  }

  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  while (leftPtr < rightPtr) {
    let sum = arr[leftPtr] + arr[rightPtr];
    if (sum === 0) {
      return [arr[leftPtr], arr[rightPtr]];
    } else if (sum > 0) {
      rightPtr--;
    } else {
      leftPtr++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 10]));
