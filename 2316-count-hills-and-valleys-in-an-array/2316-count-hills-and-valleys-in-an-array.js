/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        // Skip same neighbors (flattened land)
        if (nums[i] === nums[i - 1]) continue;

        // Move left pointer to find last different value
        let left = i - 1;
        while (left >= 0 && nums[left] === nums[i]) left--;

        // Move right pointer to find next different value
        let right = i + 1;
        while (right < nums.length && nums[right] === nums[i]) right++;

        if (left >= 0 && right < nums.length) {
            if (nums[i] > nums[left] && nums[i] > nums[right]) {
                count++; // It's a hill
            } else if (nums[i] < nums[left] && nums[i] < nums[right]) {
                count++; // It's a valley
            }
        }
    }

    return count;
};
