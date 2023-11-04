import React from "react";

const RemoveLinkedListElements = () => {
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @param {number} val
   * @return {ListNode}
   */
  var removeElements = function (head, val) {
    let itr = head,
      last,
      res = head;
    while (itr != null && itr.val === val) {
      itr = itr.next;
      res = itr;
    }
    if (res === null) return res;
    last = res;
    itr = res.next;
    while (itr != null) {
      if (itr.val === val) {
        last.next = itr.next;
        itr = itr.next;
      } else {
        last = itr;
        itr = itr.next;
      }
    }
    return res;
  };
  return <div>RemoveLinkedListElements</div>;
};

export default RemoveLinkedListElements;
