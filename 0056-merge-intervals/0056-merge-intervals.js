/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0])

    let merged = [intervals[0]]

    for (let [i, s] of intervals.slice(1)) {

        let last = merged[merged.length - 1]
       
        if (last[1] >= i) {

            last[1] = Math.max(last[1], s)

        } else {

            merged.push([i, s])
        }
    }

    return merged

};