/*
 * @Descripttion: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @Author: huanghao
 * @Date: 2021-01-27 14:15:29
 * @LastEditTime: 2021-01-27 14:33:12
 */

/*
 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1：
输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：
输入：head = []
输出：[]

示例 3：
输入：head = [1]
输出：[1]
*/



let o1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}


let o2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}

let o3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 1,
            next: null
        }
    }
}

let o4 = {
    val: 2,
    next: {
        val: 1,
        next: null
    }
}