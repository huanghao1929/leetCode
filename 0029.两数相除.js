/*
 * @Descripttion: https://leetcode-cn.com/problems/divide-two-integers/
 * @Author: huanghao
 * @Date: 2021-05-10 19:46:16
 * @LastEditTime: 2021-05-24 17:22:17
 */

/**
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 

提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    // 判断单位
    const negative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);

    // 判断正负，将两数都取正
    if (dividend < 0) {
        dividend = -dividend;
    }
    if (divisor < 0) {
        divisor = -divisor;
    }

    // 两数相除，结果在 0 - dividend 之间。
    let left = 0, right = dividend;
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        // 二分要注意，最后停下的时候，结果是在left还是在right上。
        console.log(left, right, mid);
        if (quick(mid, divisor) <= dividend) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }

    return negative ? -right : right;

    function quick(a, b){
        let result = 0;
        while (b > 0) {
            if(b & 1 === 1) {
                result += a;
            }
            b = b >> 1;
            a += a;
        }
        return result;
    }
};

console.log(divide(10, 3));

// -2147483648
// -1