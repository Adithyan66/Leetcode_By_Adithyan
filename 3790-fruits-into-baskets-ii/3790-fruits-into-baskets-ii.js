/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {

    let bas = new Array(baskets.length).fill(true)
    let count = 0
    let placed = false

    for (let i = 0; i < fruits.length; i++) {
        placed = false
        for (let j = 0; j < fruits.length; j++) {
            if(baskets[j]>=fruits[i]){
                if(bas[j]){
                    bas[j]= false
                    placed = true
                    break
                }
            }
        }
        if(!placed){
            count++
        }
    }
    return count
}