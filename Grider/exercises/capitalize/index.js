// --- Directions
// to run =>  jest capitalize/test.js --watch
//////////////////////////////
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //First Solution
// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(" ")) {
//     // from index 1 to last val return unchanged
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   // join the words
//   return words.join(" ");
// }

// module.exports = capitalize;
///////////////////////////////////////////////////////////
// Second Solution
function capitalize(str) {
  // capitalize first character in string
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
