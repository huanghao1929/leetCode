/*
 * @Descripttion: https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @Author: huanghao
 * @Date: 2021-01-26 14:19:36
 * @LastEditTime: 2021-01-26 14:54:54
 */

/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 
提示：
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
*/

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

const l1 = {
    val: 1,
    next: {
        val: 3,
        next: null
    }
}

const l2 = {
    val: 2,
    next: {
        val: 3,
        next: null
    }
}

mergeTwoLists(l1, l2);