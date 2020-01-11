/**
 * Countdown from n to 1. After that display - All Done ✅
 */

const countdown = num => {
  if (num === 0) {
    console.log("All Done ✅");
    return;
  }
  console.log(num--);
  countdown(num);
};

countdown(10);
