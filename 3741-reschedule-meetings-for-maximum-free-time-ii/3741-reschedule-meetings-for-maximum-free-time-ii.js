/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    let n = startTime.length;
    let maxGapBefore = 0, maxFreeTime = 0, lastEnd = 0;
    
    // Forward traversal - check gaps before each meeting
    for (let i = 0; i < n; i++) {
        let duration = endTime[i] - startTime[i];
        let nextStart = (i === n - 1) ? eventTime : startTime[i + 1];
        let freeTime = nextStart - lastEnd;
        
        // If current meeting duration is larger than max gap before,
        // we can't fit it in a previous gap, so subtract its duration
        if (duration > maxGapBefore) {
            freeTime -= duration;
        }
        
        maxFreeTime = Math.max(maxFreeTime, freeTime);
        maxGapBefore = Math.max(maxGapBefore, startTime[i] - lastEnd);
        lastEnd = endTime[i];
    }
    
    // Backward traversal - check gaps after each meeting
    let maxGapAfter = 0, lastStart = eventTime;
    for (let i = n - 1; i >= 0; i--) {
        let duration = endTime[i] - startTime[i];
        let prevEnd = (i === 0) ? 0 : endTime[i - 1];
        let freeTime = lastStart - prevEnd;
        
        // If current meeting can fit in a gap after, we can move it there
        if (duration <= maxGapAfter) {
            maxFreeTime = Math.max(maxFreeTime, freeTime);
        }
        
        maxGapAfter = Math.max(maxGapAfter, lastStart - endTime[i]);
        lastStart = startTime[i];
    }
    
    return maxFreeTime;
};
