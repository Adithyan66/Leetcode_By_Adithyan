/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let count = n
    function counter (){
        return count++
    }
    return counter
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */