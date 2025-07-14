/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {

    let curr = head
    let binary = ""

    while (curr) {
        binary += curr.val;
        curr = curr.next
    }

    let convert = (str) => {
        let rev = str.split("").reverse().join("")
        console.log(rev)
        let num = 0
        for (let i = 0; i < rev.length; i++) {
            num += (Number(rev[i] * Math.pow(2,i)))
        }
        return num
    }


    return convert(binary)
};