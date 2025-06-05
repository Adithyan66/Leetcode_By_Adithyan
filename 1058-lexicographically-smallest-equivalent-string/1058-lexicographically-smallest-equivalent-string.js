/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {

    let parent = new Array(26).fill(0).map((_, i) => i)

    function find(x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    function union(a, b) {
        let pa = find(a)
        let pb = find(b)

        if (pa == pb) return

        if (pa < pb) {
            parent[pb] = pa
        } else {
            parent[pa] = pb
        }
    }

    for (let i = 0; i < s1.length; i++) {
        union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97)
    }

    let ans = ""

    for (let ch of baseStr) {
        let code = find(ch.charCodeAt(0) - 97)
        ans += String.fromCharCode(code + 97)
    }

    return ans
};