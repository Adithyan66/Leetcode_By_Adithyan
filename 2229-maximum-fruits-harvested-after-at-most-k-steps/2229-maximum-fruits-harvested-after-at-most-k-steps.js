/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    // Preprocess fruits into a map for fast lookup
    let fruitMap = new Map();
    for (let [pos, amt] of fruits) {
        fruitMap.set(pos, amt);
    }

    let left = startPos - k;
    let right = startPos + k;

    let maxFruit = 0;
    let total = 0;
    let i = 0;

    // Sliding window to collect fruits between [windowLeft, windowRight]
    for (let j = 0; j < fruits.length; j++) {
        let [posJ, amtJ] = fruits[j];
        total += amtJ;

        // Check if window [fruits[i][0], fruits[j][0]] is reachable within k steps
        while (i <= j && !canReach(fruits[i][0], posJ, startPos, k)) {
            total -= fruits[i][1];
            i++;
        }

        maxFruit = Math.max(maxFruit, total);
    }

    return maxFruit;

    // Helper to check if window from l to r is reachable in k steps
    function canReach(l, r, s, k) {
        // Either go to l first then r, or r then l — pick min steps
        let goLeftFirst = Math.abs(s - l) + (r - l);
        let goRightFirst = Math.abs(s - r) + (r - l);
        return Math.min(goLeftFirst, goRightFirst) <= k;
    }
};
