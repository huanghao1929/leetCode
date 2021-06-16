/*
 * @Descripttion: https://leetcode-cn.com/problems/climbing-stairs/
 * @Author: huanghao
 * @Date: 2021-05-25 12:00:46
 * @LastEditTime: 2021-05-25 12:09:45
 */

/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // 第n个台阶，需要 n-1 ，或者 n-2
    // 上一个台阶，1 方法。
    // 上二个台阶，2 方法。
    // 上三个台阶 = 上一个 ， 然后爬2级 + 上2个，然后爬1级 => 上1个 + 上2个。
    // 上四个台阶 = 上三个 + 上2个。
    const dp = [];
    for (let index = 0; index < n; index++) {
        if (index === 0) {
            dp[index] = 1;
        }
        else if (index === 1) {
            dp[index] = 2;
        }
        else {
            dp[index] = dp[index - 1] + dp[index - 2]
        }
    }
    return dp.pop();
};

climbStairs(5)