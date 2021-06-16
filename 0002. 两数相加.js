/*
 * @Descripttion: https://leetcode-cn.com/problems/add-two-numbers/
 * @Author: huanghao
 * @Date: 2020-11-09 13:59:50
 * @LastEditTime: 2020-11-09 14:57:00
 */

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

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
var addTwoNumbers = function (l1, l2) {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    let result = [];
    let p = 0;

    while(l1 || l2 || p) {
        if (l1) {
            p += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            p += l2.val;
            l2 = l2.next;
        }
        result.push(p % 10);
        p = p / 10 >> 0;
    }


    let temp = undefined;
    for (let i = result.length - 1; i >= 0; i--) {
        const num = result[i];
        temp = new ListNode(num, temp);
    }

    return temp;
};


let l1 = {

    val: 7,
    next: {
        val: 7,
        next: null
    },
};

let l2 = {

    val: 7,
    next: {
        val: 7,
        next: null
    },
};


console.log(addTwoNumbers(l1, l2))