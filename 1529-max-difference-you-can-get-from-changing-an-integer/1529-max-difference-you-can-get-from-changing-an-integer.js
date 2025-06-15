/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {

    let str = num.toString()
    let max = str, min = str

    for (let s of str) {
        if (s != '9') {
            max = str.replaceAll(s, '9')
            break
        }
    }


    if (str[0] != '1') {
        min = str.replaceAll(str[0], '1')
    } else {
        for (let i = 1; i < str.length; i++) {
            if (str[i] != '1' && str[i] != '0') {
                console.log("works")
                min = str.replaceAll(str[i], '0')
                break
            }
        }
    }
    console.log(min)
    return parseInt(max) - parseInt(min)
};