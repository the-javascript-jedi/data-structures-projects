// function kWeakestRows(mat: number[][], k: number): number[] {
function kWeakestRows(mat, k) {
  let n = mat.length;
  let sumMap = mat.map((d, i) => [d.reduce((a, c) => a + c, 0), i]);
  let ans = [];
  for (let i = 0; i < k; i++) {
    for (let j = i; j < n; j++) {
      if (
        sumMap[j][0] < sumMap[i][0] ||
        (sumMap[j][0] == sumMap[i][0] && sumMap[i][1] > sumMap[j][1])
      ) {
        [sumMap[i], sumMap[j]] = [sumMap[j], sumMap[i]];
      }
    }
    ans.push(sumMap[i][1]);
  }
  return ans;
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
