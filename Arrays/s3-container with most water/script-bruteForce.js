// const heights = [7, 1, 2, 3, 9]; //28
const heights = [1, 8, 6, 2, 9, 4]; //24
const getMaxWaterContainer = function (heights) {
  console.log("heights", heights);
  var maxArea = 0;
  for (p1 = 0; p1 < heights.length; p1++) {
    for (p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
console.log(getMaxWaterContainer(heights));
