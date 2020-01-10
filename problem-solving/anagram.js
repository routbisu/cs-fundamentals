/*
  Write an algorithm to calculate if a word is an Anagram of another.
  An angram is a word, phrase or name formed by re-arranging the letters of another.
*/

const checkAnagram = (str1, str2) => {
  const lettersMap = {};

  // Edge case
  if (str1.length !== str2.length) {
    return false;
  }

  // Create frequency map
  for (let ch of str1) {
    lettersMap[ch] = (lettersMap[ch] || 0) + 1;
  }

  // Compare second str with frquency map
  for (let ch of str2) {
    if (lettersMap[ch]) {
      lettersMap[ch]--;
    } else {
      return false;
    }
  }

  return true;
};

checkAnagram("cinema", "iceman");
