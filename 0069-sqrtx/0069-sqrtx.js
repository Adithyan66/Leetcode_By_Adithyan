var mySqrt = function (x) {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) return mid;

        if (square < x) {
            ans = mid; 
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};
