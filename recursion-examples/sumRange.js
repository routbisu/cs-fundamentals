/**
 * Count 1 to n using recursion
 */

const sumRange = n => {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
};

console.log(sumRange(10));
