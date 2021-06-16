/*
 * @Descripttion: https://leetcode-cn.com/problems/valid-perfect-square/
 * @Author: huanghao
 * @Date: 2021-05-24 14:20:49
 * @LastEditTime: 2021-05-24 14:35:39
 */
/*
给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。


示例 1：

输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false
 

提示：

1 <= num <= 2^31 - 1
*/

/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    if (num === 1) {
        return true;
    }
    let left = 1, right = Math.floor(num / 2);
    while(left < right) {
        const mid = left + right >> 1;
        if (mid * mid >= num) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left * left === num;
};

isPerfectSquare(14);