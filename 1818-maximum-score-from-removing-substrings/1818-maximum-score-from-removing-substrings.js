var maximumGain = function(s, x, y) {
    if (y > x) {
        // Swap to always remove the higher one first
        [x, y] = [y, x]
        s = s.split('').map(c => c === 'a' ? '#' : (c === 'b' ? 'a' : c)).map(c => c === '#' ? 'b' : c).join('')
    }

    // Helper to remove one pattern and return [score, leftover string]
    const removePattern = (str, first, second, score) => {
        let stack = []
        let total = 0
        for (let ch of str) {
            if (stack.length && stack[stack.length - 1] === first && ch === second) {
                stack.pop()
                total += score
            } else {
                stack.push(ch)
            }
        }
        return [total, stack.join('')]
    }

    // First remove "ab"
    let [score1, newStr] = removePattern(s, 'a', 'b', x)
    // Then remove "ba"
    let [score2] = removePattern(newStr, 'b', 'a', y)

    return score1 + score2
};
