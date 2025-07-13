/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b)
    trainers.sort((a, b) => a - b)
    let count = 0
    let k=0

    for (let i = 0; i < players.length; i++) {
        j = k
        while (j < trainers.length) {
            if (players[i] <= trainers[j]) {
                count++
                j++
                k = j
                break
            }else{

            j++
            }
        }
    }
    return count
};