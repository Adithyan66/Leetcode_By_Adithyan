/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let arr =  Array.from(num.toString().split(""))

   let prr =arr.map(a=>Number(a))

   let max = 9

   for(let i =0; i< prr.length; i++){
    if(prr[i]<max){
        prr[i] = max
        break
    }
   }

   return Number(prr.join(""))


};