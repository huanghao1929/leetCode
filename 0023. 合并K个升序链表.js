/*
 * @Descripttion: https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @Author: huanghao
 * @Date: 2021-01-26 15:43:59
 * @LastEditTime: 2021-01-27 14:14:26
 */

/*
给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

示例 2：
输入：lists = []
输出：[]

示例 3：
输入：lists = [[]]
输出：[]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 分治大法好
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 合并两个有序链表
    var mergeTwoLists = function(l1, l2) {
        function ListNode(val, next) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
        const resultNode = new ListNode('emtiy');
        let tempNode = resultNode;
        while(l1 && l2) {
            if (l1.val > l2.val) {
                tempNode.next = l2;
                tempNode = tempNode.next;
                l2 = l2.next;
            }
            else {
                tempNode.next = l1;
                tempNode = tempNode.next;
                l1 = l1.next;
            }
        }
        if (l1) {
            tempNode.next = l1
        }
        if (l2) {
            tempNode.next = l2
        }

        return resultNode.next;
    };
    let result = mergeTwoLists(lists[0], lists[1]);
    for (let i = 2; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};