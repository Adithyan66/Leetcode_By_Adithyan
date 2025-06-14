/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (number) {

    let n = number.toString().split("")
    let max = ''
    let min = ''
    let omin 
    let c = 0
    let is = true
    for (let i of n) {
        if (i != '9') {
            is = false
            for (let k of n) {
                if (k == i) {
                    max += "9"
                } else {
                    max += k
                }
            }
            break
        }
    }
    if(is) max = number

    for (let i of n) {
        if (i != '0') {
            for (let k of n) {
                if (k == i) {
                    min += "0"
                } else {
                    min += k
                }
            }
            for (let o of min) {
                if (o == "0") {
                    c++
                } else break
            }
            omin = min.slice(c)
            break
        }
    }



    return max - omin

};