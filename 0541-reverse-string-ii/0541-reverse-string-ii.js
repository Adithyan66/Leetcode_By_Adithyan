/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let spl = s.split("")

    for (let x = 0; x < spl.length; x += 2 * k) {
        let i =  x
        let j = Math.min(i + k-1, spl.length - 1)
        while (j > i) {
            [spl[i], spl[j]] = [spl[j], spl[i]]
            j--
            i++
        }
    }
    return spl.join("")
};