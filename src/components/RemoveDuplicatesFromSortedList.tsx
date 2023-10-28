import React from "react";

const RemoveDuplicatesFromSortedList = () => {
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
  var deleteDuplicates = function (head) {
    if (head === [] || head === null) return head;
    let last = head,
      itr = null;
    if (head.next) {
      itr = head.next;
    }
    while (itr != null) {
      if (last.val === itr.val) {
        last.next = itr.next;
      } else {
        last = itr;
      }
      itr = itr.next;
    }
    return head;
  };
  return <div>RemoveDuplicatesFromSortedList</div>;
};

export default RemoveDuplicatesFromSortedList;
