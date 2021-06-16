/*
 * @Descripttion: https://leetcode-cn.com/problems/unique-paths/
 * @Author: huanghao
 * @Date: 2021-05-25 14:50:57
 * @LastEditTime: 2021-05-25 15:10:39
 */

/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    let dp = [];
    for (let i = 0; i < m; i++) {
        if (!dp[i]) {
            dp[i] = new Array(n).fill(0);
        }
        for (let j = 0; j < n; j++) {
            if (j === 0 && i === 0) {
                dp[i][j] = 1;
            }
            else if (j === 0) {
                dp[i][j] = dp[i - 1][j];
            }
            else if (i === 0) {
                dp[i][j] = dp[i][j - 1];
            }
            else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            }
        }
    }
    return dp[m -1][n - 1];
};

uniquePaths(3, 2);