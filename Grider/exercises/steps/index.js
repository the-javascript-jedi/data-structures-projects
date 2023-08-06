// --- Directions
// jest steps/test.js --watch
//
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// Iterative Approach
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
// module.exports = steps;
// ===========================
//Recursive Approach
function steps(n, row = 0, stair = "") {
  // handle case where work is complete
  if (n == row) {
    return;
  }
  // handles case where row end is reached
  if (n === stair.length) {
    console.log(stair);
    //increment the row number and using recursion call the function again
    return steps(n, row + 1);
  }
  //   handle case where stair strng is still being assembled
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
module.exports = steps;
