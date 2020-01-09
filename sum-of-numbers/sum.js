const { performance } = require("perf_hooks");

const addUptoN = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUptoNOptimal = n => {
  return (n * (n + 1)) / 2;
};

const t1 = performance.now();
addUptoN(2000000000);
const t2 = performance.now();
addUptoNOptimal(2000000000);
const t3 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
console.log(`Time elapsed: ${(t3 - t2) / 1000} seconds`);
