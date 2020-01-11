/**
 * Return the nth number of fibonacci series using recursion
 */

const fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));
