/**
 * Implement binarySearch algorithm for sorted array.
 * Should return the index of the element if found and -1 if not found.
 */

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (arr[left] === val) {
    return left;
  } else if (arr[right] === val) {
    return right;
  }

  while (middle != left && middle != right) {
    if (arr[middle] === val) {
      return middle;
    } else if (arr[left] === val) {
      return left;
    } else if (arr[right] === val) {
      return right;
    } else if (arr[middle] < val) {
      left = middle;
    } else {
      right = middle;
    }
    middle = Math.floor((left + right) / 2);
  }

  return -1;
};

console.log(binarySearch([0, 1, 2, 3], 3));
