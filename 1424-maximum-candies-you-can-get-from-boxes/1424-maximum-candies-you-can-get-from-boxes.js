/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
const maxCandies = (status, candies, keys, containedBoxes, initialBoxes) => {
  const n = status.length;
  const queue = [...initialBoxes];
  const visited = new Array(n).fill(false);
  const hasKey = new Array(n).fill(false);
  const foundBoxes = new Array(n).fill(false);
  let totalCandies = 0;

  // Mark initial keys
  for (let i = 0; i < n; i++) {
    if (status[i] === 1) {
      hasKey[i] = true;
    }
  }

  while (queue.length > 0) {
    let progress = false;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const box = queue.shift();

      if (visited[box] || (!status[box] && !hasKey[box])) {
        queue.push(box);
        continue;
      }

      visited[box] = true;
      totalCandies += candies[box];
      progress = true;

      // Add keys found in the current box
      for (const key of keys[box]) {
        if (!hasKey[key]) {
          hasKey[key] = true;
        }
      }

      // Add contained boxes
      for (const contained of containedBoxes[box]) {
        queue.push(contained);
      }
    }

    if (!progress) {
      break;
    }
  }

  return totalCandies;
};
