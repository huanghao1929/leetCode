/*
 * @Descripttion:https://leetcode-cn.com/problems/palindrome-number/
 * @Author: huanghao
 * @Date: 2020-12-02 19:35:32
 * @LastEditTime: 2020-12-02 19:48:11
 */

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

/*
示例 1:

输入: 121
输出: true

示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let res = 0;
    let tempX = x;
    while (tempX) {
        res = res * 10 + tempX % 10;
        tempX = tempX / 10 >> 0;
    }

    return res === x;
};

console.log(isPalindrome(121))