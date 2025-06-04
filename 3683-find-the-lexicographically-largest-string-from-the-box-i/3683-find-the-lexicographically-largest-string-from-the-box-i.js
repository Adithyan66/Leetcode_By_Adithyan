/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
function answerString(word, numFriends) {
    if (numFriends === 1) {
        return word;
    }
    const n = word.length;
    let ans = "";
    for (let i = 0; i < n; i++) {

        const k = Math.min(n - i, n - numFriends + 1);

        const curr = word.slice(i, i + k);
        if (curr > ans) {
            ans = curr;
        }
    }
    return ans;
}