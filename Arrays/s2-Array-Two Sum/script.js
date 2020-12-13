console.log("Page loaded");
const nums = [1, 3, 7, 9, 2];
const target = 11;
function findTwoSum(nums, target) {
  console.log("nums", nums);
  console.log("target", target);
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    //set numsMap - key
    //first iteration - currentMapVal=numsMap[1]
    //currentMapVal is  the key of the numsMap object
    const currentMapVal = numsMap[nums[p]]; //set numsMap with array value
    //if check - return undefined if key is not present in currentMapVal
    if (currentMapVal >= 0) {
      //
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
      /*
      //set numsMap -  value
      //set numsMap object to numberToFind val and array index
      numsMap={numberToFind:array index }
      {
        2: 3
        4: 2
        8: 1
        10: 0 
      }
      */
    }
    console.log("numsMap", numsMap);
  }
}
console.log(findTwoSum(nums, target));
