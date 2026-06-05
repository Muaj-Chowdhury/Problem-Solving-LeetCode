/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 1. Create a dummy node to handle edge cases (like removing the head)
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let slow = dummy;
    let fast = dummy;
    
    // 2. Move fast pointer so there is a gap of n nodes between slow and fast
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // 3. Move both pointers until fast reaches the last node
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // 4. Skip the N-th node from the end
    slow.next = slow.next.next;
    
    // 5. Return the real head of the list
    return dummy.next;
};