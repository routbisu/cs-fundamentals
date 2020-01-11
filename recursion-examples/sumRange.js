/**
 * Count 1 to n using recursion
 */

const sumRange = n => {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
};

// Using arrow function syntax
const sumRangeArrow = n => (n === 1 ? 1 : n + sumRange(n - 1));

console.log(sumRange(10));
console.log(sumRangeArrow(4));
