/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {

    return {
        toBe: (n) => {
            if (n !== val) throw Error("Not Equal")
            else return true
        },
        notToBe: (n) => {
            if (n === val) throw Error("Equal")
            else return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */