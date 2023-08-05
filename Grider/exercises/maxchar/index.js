// to run // jest anagrams/test.js --watch
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  // for of used to iterate an array
  for (let char of str) {
    // if object key does not exist create the object key, if key exists increment the key
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // for in used to iterate an object
  for (let char in charMap) {
    //   maxChar("abcccccccd") === "c"
    //   {
    //     max:maxChar // c:7
    //   }
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log("charMap", charMap);
  console.log("max", max);
  console.log("maxChar", maxChar);
  return maxChar;
}

module.exports = maxChar;
