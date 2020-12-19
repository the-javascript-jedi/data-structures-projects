heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; //8
// heights = [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]; //20
function getTrappedRainWater(heights) {
  let totalWater = 0;
  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    // leftP decrements because it is going to the left
    while (leftP >= 0) {
      // find the largest value to the left of p
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    // rightP increments because it is going to the right
    while (rightP < heights.length) {
      // find the largest value to the right of p
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    //calculate the current water of each index
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    // add to total water if currentWater > 0
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}
console.log(getTrappedRainWater(heights));
