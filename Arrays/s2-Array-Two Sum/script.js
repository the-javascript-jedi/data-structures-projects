console.log("Page loaded");
const nums = [1, 3, 7, 9, 2];
const resultArr = [];
target = 11;
function findTwoSum(nums, target) {
  console.log("nums", nums);
  console.log("target", target);
  for (let p1 = 0; p1 < nums.length; p1++) {
    let numberToFind = target - nums[p1];
    console.log("numberToFind", numberToFind);
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === numberToFind) {
        // resultArr.push(p1);
        // resultArr.push(p2);
        return [p1, p2];
      }
    }
  }
  return null; //if no solutions are present
}
console.log(findTwoSum(nums, target));
// console.log("resultArr", resultArr); //3,4
