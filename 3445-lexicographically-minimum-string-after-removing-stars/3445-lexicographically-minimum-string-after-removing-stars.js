var clearStars = function (s) {

    let n = s.length
    let str = new Array(n).fill(true)

    let map = new Map()

    for (let i = 0; i < n; i++) {
        let char = s[i]

        if (char != "*") {
            if (!map.get(s[i])) {
                map.set(s[i], [])
            }
            map.get(s[i]).push(i)
        } else {
            str[i] = false
            for (let i = 0; i < 26; i++) {
                let char = String.fromCharCode(i + 97)
                if (map.has(char) && map.get(char).length > 0) {
                    let lastInd = map.get(char).pop()
                    str[lastInd] = false
                    break
                }
            }
        }
    }
    let res =""
    for (let i = 0; i < n; i++) {
        if (str[i]) res += s[i]
    }
    return res
}