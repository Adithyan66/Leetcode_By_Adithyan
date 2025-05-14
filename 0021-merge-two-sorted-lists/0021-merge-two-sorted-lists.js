/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    addToList(val){
        if(!this.head){
            this.head = new Node(val)
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = new Node(val)
    }
}

var mergeTwoLists = function(list1, list2) {
    let curr = list1
    let ans = []
    while(curr){
        ans.push(curr.val)
        curr = curr.next
    }
    curr = list2
    while(curr){
         ans.push(curr.val)
        curr = curr.next
    }

    let res = ans.sort((a,b)=>a-b)
    console.log(res)

    let list = new LinkedList()
    for(r of res){
        list.addToList(r)
    }
    return list.head
};