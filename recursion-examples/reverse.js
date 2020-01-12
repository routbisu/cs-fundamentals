/**
 * Return the reverse of a string using recursion
 * hint: You can use slice method, thought the complexity with become O(n^2)
 */

const reverse = str => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse("awesome"));
