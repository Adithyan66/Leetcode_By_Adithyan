var maxCollectedFruits = function(fruits) {
  const n = fruits.length;

  const getTopLeft = () => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += fruits[i][i];
    }
    return sum;
  };

  const getTopRight = () => {
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[0][n - 1] = fruits[0][n - 1];

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (x >= y && !(x === n - 1 && y === n - 1)) continue;
        for (let [dx, dy] of [[1, -1], [1, 0], [1, 1]]) {
          let i = x - dx;
          let j = y - dy;
          if (i >= 0 && j >= 0 && i < n && j < n && !(i < j && j < n - 1 - i)) {
            dp[x][y] = Math.max(dp[x][y], dp[i][j] + fruits[x][y]);
          }
        }
      }
    }
    return dp[n - 1][n - 1];
  };

  const getBottomLeft = () => {
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[n - 1][0] = fruits[n - 1][0];

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (x <= y && !(x === n - 1 && y === n - 1)) continue;
        for (let [dx, dy] of [[-1, 1], [0, 1], [1, 1]]) {
          let i = x - dx;
          let j = y - dy;
          if (i >= 0 && j >= 0 && i < n && j < n && !(j < i && i < n - 1 - j)) {
            dp[x][y] = Math.max(dp[x][y], dp[i][j] + fruits[x][y]);
          }
        }
      }
    }
    return dp[n - 1][n - 1];
  };

  return getTopLeft() + getTopRight() + getBottomLeft() - 2 * fruits[n - 1][n - 1];
};
