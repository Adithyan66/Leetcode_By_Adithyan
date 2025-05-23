/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 =[]
    let stack2 =[]

    for(let c of s){
        if(c == "#") stack1.pop()
        else stack1.push(c)
    }
    for(let c of t){
        if(c == "#") stack2.pop()
        else stack2.push(c)
    }
    return stack1.join("")== stack2.join("")
};