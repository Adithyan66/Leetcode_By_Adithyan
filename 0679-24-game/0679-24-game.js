var judgePoint24 = function(cards) {
    const EPS = 1e-6;

    function dfs(nums) {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < EPS;
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;

                // new array without nums[i] and nums[j]
                const next = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) next.push(nums[k]);
                }

                // try all operations
                for (let res of compute(nums[i], nums[j])) {
                    next.push(res);
                    if (dfs(next)) return true;
                    next.pop();
                }
            }
        }
        return false;
    }

    function compute(a, b) {
        const results = [a + b, a - b, b - a, a * b];
        if (Math.abs(b) > 1e-6) results.push(a / b);
        if (Math.abs(a) > 1e-6) results.push(b / a);
        return results;
    }

    return dfs(cards);
};
