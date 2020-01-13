/**
 * Given an array of numbers, find the total number of sub-sets of the array
 * that add up to a given value n
 * Ex: Input - [2,6,4,10] and 16
 * Find the number of subsets of the array that have the sum of 16
 * Ans: 2 - {10,6} & {10,4,2}
 */

const setOFnumbers = (arr, total) => {
  const memo = {};
  return rec(arr, total, arr.length - 1, memo);
};

const rec = (arr, total, i, memo) => {
  const key = total + ":" + i;
  if (memo[key]) return memo[key];
  let result;

  if (total === 0) return 1;
  else if (total < 0) return 0;
  else if (i < 0) return 0;
  else if (total < arr[i]) {
    result = rec(arr, total, i - 1, memo);
  } else {
    result =
      rec(arr, total - arr[i], i - 1, memo) + rec(arr, total, i - 1, memo);
  }
  memo[key] = result;
  return result;
};

console.log(setOFnumbers([6, 10, 2, 4], 16));
