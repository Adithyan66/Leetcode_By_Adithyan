/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    const n = s.length;
    
    // Count zeros
    let zeros = 0;
    for (let char of s) {
        if (char === '0') zeros++;
    }
    
    let currentValue = 0;
    let powerOfTwo = 1;
    let onesCount = 0;
    
    // Process from right to left
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '1') {
            if (powerOfTwo <= k && currentValue <= k - powerOfTwo) {
                currentValue += powerOfTwo;
                onesCount++;
            }
        }
        
        // Prevent overflow and early termination
        if (powerOfTwo > k / 2) break;
        powerOfTwo *= 2;
    }
    
    return zeros + onesCount;
};