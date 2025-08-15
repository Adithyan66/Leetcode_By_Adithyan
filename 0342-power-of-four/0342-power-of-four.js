/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    function check(k){
        if(4**k == n) return true
        if(4**k > n) return false
        return check(k+1)
    }
    
    return check(0)
};