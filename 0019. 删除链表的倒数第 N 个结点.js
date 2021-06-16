/*
 * @Descripttion: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @Author: huanghao
 * @Date: 2021-01-25 17:20:20
 * @LastEditTime: 2021-01-26 11:04:49
 */
// NOTE: acwing 103分钟
/*
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：
输入：head = [1], n = 1
输出：[]

示例 3：
输入：head = [1,2], n = 1
输出：[1]
*/

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

    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    const shamNode = new ListNode(-1, head);
    const getAllNode = new ListNode(-1, head);
    let maxLength = 0;
    while (getAllNode.next) {
        const node = getAllNode.next;
        getAllNode.next = node.next;
        maxLength++;
    }
    let tempNode = shamNode;
    for (let i = 0; tempNode; i++) {
        if (i === maxLength - n) {
            tempNode.next = tempNode.next.next;
        }
        tempNode = tempNode.next;
    }
    return shamNode.next;

};

let o = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}


console.log(removeNthFromEnd(o, 1));