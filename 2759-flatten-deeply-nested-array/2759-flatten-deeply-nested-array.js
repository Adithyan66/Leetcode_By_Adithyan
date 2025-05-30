/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    function flatArr(arr, n) {
        let res = []
        for (let ar of arr) {
            if (Array.isArray(ar) && n > 0){
                res.push(...flat(ar,n-1))
            }else{
                res.push(ar)
            }
        }
        return res
    }
    return flatArr(arr,n)
};