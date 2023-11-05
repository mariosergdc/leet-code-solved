import React from "react";

const ReverseLinkedList = () => {
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  var reverseList = function (head) {
    let before = null,
      itr = head,
      itrNext;
    while (itr != null) {
      itrNext = itr.next;
      itr.next = before;
      before = itr;
      itr = itrNext;
    }
    return before;
  };
  return <div>ReverseLinkedList</div>;
};

export default ReverseLinkedList;
