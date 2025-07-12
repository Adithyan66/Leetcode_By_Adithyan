/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function(n, firstPlayer, secondPlayer) {
  const memo = new Map();

  const dfs = (players, round) => {
    const key = players.join(',') + '|' + round;
    if (memo.has(key)) return memo.get(key);

    const m = players.length;
    const matchups = [];
    let l = 0, r = m - 1;
    while (l < r) {
      matchups.push([players[l], players[r]]);
      l++;
      r--;
    }
    const middle = l === r ? [players[l]] : [];

    const result = [];

    const backtrack = (i, path) => {
      if (i === matchups.length) {
        const nextRound = [...path, ...middle].sort((a, b) => a - b);
        const res = dfs(nextRound, round + 1);
        for (const [earliest, latest] of res) {
          result.push([earliest, latest]);
        }
        return;
      }

      const [a, b] = matchups[i];
      if ((a === firstPlayer && b === secondPlayer) || (a === secondPlayer && b === firstPlayer)) {
        result.push([round, round]);
        return;
      }

      if (a === firstPlayer || a === secondPlayer) {
        backtrack(i + 1, [...path, a]);
      } else if (b === firstPlayer || b === secondPlayer) {
        backtrack(i + 1, [...path, b]);
      } else {
        backtrack(i + 1, [...path, a]);
        backtrack(i + 1, [...path, b]);
      }
    };

    backtrack(0, []);
    memo.set(key, result);
    return result;
  };

  const players = Array.from({ length: n }, (_, i) => i + 1);
  const allRounds = dfs(players, 1);

  let minRound = Infinity, maxRound = -Infinity;
  for (const [earliest, latest] of allRounds) {
    minRound = Math.min(minRound, earliest);
    maxRound = Math.max(maxRound, latest);
  }
  return [minRound, maxRound];
};
