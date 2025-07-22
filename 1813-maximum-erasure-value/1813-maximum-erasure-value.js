var maximumUniqueSubarray = function(nums) {
    let set = new Set()
    let maxSum = 0, currSum = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            set.delete(nums[left])
            currSum -= nums[left]
            left++
        }
        set.add(nums[right])
        currSum += nums[right]
        maxSum = Math.max(maxSum, currSum)
    }

    return maxSum
};
