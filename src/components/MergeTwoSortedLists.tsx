import React from "react";

const MergeTwoSortedLists = () => {
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
  var mergeTwoLists = function (list1, list2) {
    let itr1 = list1;
    let itr2 = list2;
    if (itr1 === null && itr2 === null) return null;
    let resp = new ListNode();

    let res = resp;
    while (itr1 != null && itr2 != null) {
      if (itr1.val <= itr2.val) {
        res.val = itr1.val;
        res.next = new ListNode();
        res = res.next;
        itr1 = itr1.next;
      } else {
        res.val = itr2.val;
        res.next = new ListNode();
        res = res.next;
        itr2 = itr2.next;
      }
    }

    if (itr1) {
      while (itr1 != null) {
        res.val = itr1.val;
        if (itr1.next === null) {
          res.next = null;
        } else {
          res.next = new ListNode();
          res = res.next;
        }
        itr1 = itr1.next;
      }
    } else if (itr2) {
      while (itr2 != null) {
        res.val = itr2.val;
        if (itr2.next === null) {
          res.next = null;
        } else {
          res.next = new ListNode();
          res = res.next;
        }
        itr2 = itr2.next;
      }
    }

    return resp;
  };
  return <div>MergeTwoSortedLists</div>;
};

export default MergeTwoSortedLists;
