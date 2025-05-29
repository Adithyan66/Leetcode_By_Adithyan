/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let grouped = {}
    for (let list of this) {
        let key = fn(list)
        if (!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(list)
    }
    return grouped
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */