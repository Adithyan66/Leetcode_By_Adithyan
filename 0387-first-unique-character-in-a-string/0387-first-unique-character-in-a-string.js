/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map ={}

    for(let k of s){
        map[k] = (map[k]||0)+1
    }

    for(let i =0; i< s.length ; i++){
        if(map[s[i]]==1) return i
    }

    return -1
};