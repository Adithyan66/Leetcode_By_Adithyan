/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    for(let i = 0 ; i<= n ; i++){
        if(2**i == n ){
            return true
        }
        if(2**i > n){
            return false
        }
    }
    return false
};