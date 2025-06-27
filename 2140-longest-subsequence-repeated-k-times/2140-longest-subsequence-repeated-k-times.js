function longestSubsequenceRepeatedK(s, k) {
  // Function to count character frequencies
  const getFreq = (str) => {
    const freq = new Array(26).fill(0);
    for (let c of str) {
      freq[c.charCodeAt(0) - 97]++;
    }
    return freq;
  };

  // Function to get candidate characters (freq >= k, sorted z to a)
  const getCandidates = (freq) => {
    const candidates = [];
    for (let i = 0; i < 26; i++) {
      if (freq[i] >= k) {
        candidates.push(String.fromCharCode(i + 97));
      }
    }
    return candidates.sort().reverse(); // Reverse for lexicographically largest
  };

  // Function to check if sub * k is a subsequence of s
  const isSubsequence = (sub, s, k) => {
    const repeated = sub.repeat(k);
    let i = 0;
    for (let c of s) {
      if (i < repeated.length && c === repeated[i]) {
        i++;
      }
    }
    return i === repeated.length;
  };

  // Main BFS logic
  const bfs = (candidates, s, k) => {
    let queue = [""];
    let result = "";

    while (queue.length > 0) {
      const nextQueue = [];
      for (let curr of queue) {
        for (let c of candidates) {
          const next = curr + c;
          if (isSubsequence(next, s, k)) {
            // Update result if longer or lexicographically larger
            if (next.length > result.length || (next.length === result.length && next > result)) {
              result = next;
            }
            nextQueue.push(next); // Explore longer subsequences
          }
        }
      }
      queue = nextQueue;
    }

    return result;
  };

  // Execute the solution
  const freq = getFreq(s);
  const candidates = getCandidates(freq);
  return bfs(candidates, s, k);
}
