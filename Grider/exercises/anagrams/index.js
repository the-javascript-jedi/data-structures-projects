//  --- to run
// jest anagrams/test.js --watch
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // helper function for building character maps
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  //console.log("aCharMap", aCharMap); // aCharMap { a: 3, t: 1, r: 1, e: 4, l: 1, i: 1, f: 1, b: 1, n: 1, c: 1, h: 1 }
  //console.log("bCharMap", bCharMap); // bCharMap { a: 4, t: 1, r: 2, e: 4, f: 1, n: 1, c: 1, y: 1, d: 1 }
  // compare the created char maps to see if the strings are of same length
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // iterate over char map
  for (let char in aCharMap) {
    // compare if the length of the charmap values are same
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  //   anagram
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  // not a number or character or lower case character we replace with an empty string
  // remove white spaces
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    // create a charMap for each character
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
module.exports = anagrams;
