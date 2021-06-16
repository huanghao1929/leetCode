/*
 * @Descripttion: https://leetcode-cn.com/problems/sqrtx
 * @Author: huanghao
 * @Date: 2021-05-12 10:55:19
 * @LastEditTime: 2021-05-12 11:13:06
 */

/*
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
     由于返回类型是整数，小数部分将被舍去。
*/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    // x的平方根，结果必然在 0 - x之间。
    let left = 0, right = x;
    while(left < right) {
        const mid = parseInt((left + right + 1) / 2);
        if (mid * mid <= x) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
};

console.log(mySqrt(2147483647));