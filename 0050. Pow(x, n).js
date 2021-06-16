/*
 * @Descripttion: https://leetcode-cn.com/problems/powx-n/
 * @Author: huanghao
 * @Date: 2021-05-12 10:30:39
 * @LastEditTime: 2021-05-12 10:47:48
 */

/*
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25

提示：

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let result = 1;
    let max = false;
    if (n < 0) {
        x = 1 / x;
        n = -n;
        if (n === 2147483648) {
            n = n - 1;
            max = true;
        }
    }
    while(n > 0){
        if (n & 1 === 1) {
            result *= x;
        }
        n = n >> 1;
        x *= x;
    }
    if (max) {
        result *= result;
    }
    return result;
};

myPow(2, -2147483648);

// x = 2.00000 target = -2147483648 没过