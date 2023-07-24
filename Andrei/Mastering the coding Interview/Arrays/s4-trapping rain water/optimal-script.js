heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; //8
//heights = [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]; //20
/*
--2 pointer method-Left Pointer=0th index Right Pointer=nth index 
1)Identify the pointer with lesser value ()
2)Is the pointer value lesser than or equal to the max value on that side
  --yes->update max on that side
  --no->get water for pointer value, add to the total
3)move the pointer inwards
4repeat for other pointer
*/
function getTrappedRainWater(heights) {
  let left = 0,
    right = heights.length - 1,
    leftMax = 0,
    rightMax = 0,
    total = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        total += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        total += rightMax - heights[right];
      }
      right--;
    }
  }
  return total;
}
console.log(getTrappedRainWater(heights));
