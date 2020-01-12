/**
 * Return the nth number of fibonacci series using recursion
 */

const fibonacciRecursive = n => {
  if (n == 1 || n == 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(5));

const memo = [];
const fibonacciMemoize = n => {
  if (memo[n] !== undefined) return memo[n];
  let result;
  if (n === 1 || n === 2) result = 1;
  else result = fibonacciMemoize(n - 1) + fibonacciMemoize(n - 2);
  memo[n] = result;
  return result;
};

console.log(fibonacciRecursive(5));
