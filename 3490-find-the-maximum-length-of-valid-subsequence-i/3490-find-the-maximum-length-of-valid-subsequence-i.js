/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {

    let pa = [
        [0, 0],
        [0, 0]
    ]

    for (num of nums) {
        let p = num % 2
        for (let y = 0; y < 2; y++) {
            pa[p][y] = pa[y][p] + 1
        }
    }
    return Math.max(
    pa[0][0], pa[0][1],
    pa[1][0], pa[1][1]
  );
};