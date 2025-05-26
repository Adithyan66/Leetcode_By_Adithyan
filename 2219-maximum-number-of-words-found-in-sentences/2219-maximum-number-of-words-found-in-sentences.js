/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let sent =[]
    sentences.forEach((se)=>{
        sent.push(se.split(" "))
    })
    let res = 0
    console.log(sent)
    for(let kk of sent){
        if(kk.length>res) res = kk.length
    }
    // for (let i of sent) {
    //     let kk = i.split(" ").length
    //     if (kk > res) res = kk
    // }
    return res
};