/**
 * Example of dynamic programming - storing the results of repititive computation
 * Return the nth number of fibonacci series using recursion
 * Complexity - O(2 ^ n) because of repeated computations
 */
const fibonacciRecursive = n => {
  if (n == 1 || n == 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(6));

/* Fibonacci implementation using memoization
   Complexity - O(n)
*/

const memo = [];
const fibonacciMemoize = n => {
  if (memo[n] !== undefined) return memo[n];
  let result;
  if (n === 1 || n === 2) result = 1;
  else result = fibonacciMemoize(n - 1) + fibonacciMemoize(n - 2);
  memo[n] = result;
  return result;
};

console.log(fibonacciRecursive(6));

/* Fibanacii implementation using bottom up approach
  Complexity: O(n)
*/
const fibonacciBottomUp = n => {
  if (n === 1 || n === 2) return 1;
  let fib = [];
  fib[1] = 1;
  fib[2] = 1;
  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
};

console.log(fibonacciBottomUp(6));
