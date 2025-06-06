/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {

    let freqMap = new Map()

    for (let i = 0; i < s.length; i++) {
        freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1)
    }

    let set = [...new Set(s)].sort()

    function getMin() {
        for (let ch of set) {
            if (freqMap.get(ch) > 0) return ch
        }
        return null
    }

    let stack = []
    let res = []

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        freqMap.set(s[i], (freqMap.get(s[i]) - 1))

        while (stack.length && stack[stack.length - 1] <= getMin()) {
            res.push(stack.pop())
        }
    }

    while (stack.length) {
        res.push(stack.pop())
    }
    return res.join("")
};