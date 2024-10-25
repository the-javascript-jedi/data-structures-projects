console.log("script loaded!");
function areAnagrams(s, t) {
  // Check if lengths are equal
  if (s.length !== t.length) {
    return false;
  }

  // Sort and compare the strings
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

// Test cases
console.log(areAnagrams("anagram", "nagaram")); // Output: true
console.log(areAnagrams("rat", "car")); // Output: false
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
