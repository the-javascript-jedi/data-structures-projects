// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var reversed = n.toString().split("").reverse().join("");
    // we will use Math.sign() to include the sign of the number i.e)-15==-51
    // The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.   
    return parseInt(reversed)*Math.sign(n);
 }
 module.exports = reverseInt;
 