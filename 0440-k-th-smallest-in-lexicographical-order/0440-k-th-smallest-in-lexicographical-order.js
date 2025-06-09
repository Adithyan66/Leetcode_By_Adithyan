/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let curr = 1;
    k--;

    while (k > 0) {
        let steps = countSteps(n, curr, curr + 1);

        if (steps <= k) {
            curr++;      
            k -= steps;
        } else {
            curr *= 10; 
            k--;
        }
    }

    return curr;
};

function countSteps(n, prefix, nextPrefix) {
    let steps = 0;
    while (prefix <= n) {
        steps += Math.min(n + 1, nextPrefix) - prefix;
        prefix *= 10;
        nextPrefix *= 10;
    }
    return steps;
}
