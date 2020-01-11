/**
 * Write a method called maxSubarraySum which accepts an array of integers and a number
 * called n. The function should calculate the maximum sum of n consecutive elements in
 * an array.
 */

const maxSubarraySum = (arr, n) => {
  // Edge case
  if (n > arr.length) return null;

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let currentSum = maxSum;

  for (let j = n, i = 0; j < arr.length; j++, i++) {
    currentSum = currentSum + arr[j] - arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 1, 6, 3], 3));
console.log(maxSubarraySum([2, 6], 3));
