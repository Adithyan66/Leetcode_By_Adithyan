/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const n = startTime.length;
    // Build gaps array
    const gaps = [];
    gaps.push(startTime[0]);  // from time 0 to first meeting
    for (let i = 1; i < n; ++i) {
        gaps.push(startTime[i] - endTime[i - 1]);
    }
    gaps.push(eventTime - endTime[n - 1]);  // after last meeting

    // Sliding window of size k+1
    let windowSum = 0;
    for (let i = 0; i <= k; ++i) {
        windowSum += gaps[i];
    }

    let ans = windowSum;
    for (let i = k + 1; i < gaps.length; ++i) {
        windowSum += gaps[i] - gaps[i - (k + 1)];
        ans = Math.max(ans, windowSum);
    }

    return ans;
};
