/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  const dummy = new ListNode(0);
  let curr = head;
  
  while (curr) {
    let prev = dummy;

    // Find insertion spot: prev.next.val >= curr.val
    while (prev.next && prev.next.val < curr.val) {
      prev = prev.next;
    }

    // Splice curr into sorted list
    let next = curr.next;
    curr.next = prev.next;
    prev.next = curr;

    curr = next;
  }

  return dummy.next;
};
