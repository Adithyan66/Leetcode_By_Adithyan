/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let dummy = new ListNode(0)
    let current = dummy
    let carry = 0

    while (l1 !== null || l2 !== null || carry > 0) {
        let vall1 = l1 ? l1.val : 0
        let vall2 = l2 ? l2.val : 0

        let sum = vall1 + vall2 + carry
        carry = Math.floor(sum / 10)
        sum %= 10

        current.next = new ListNode(sum)
        current = current.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return dummy.next
};