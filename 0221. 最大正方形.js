/*
 * @Descripttion: https://leetcode-cn.com/problems/maximal-square/
 * @Author: huanghao
 * @Date: 2021-05-26 15:40:28
 * @LastEditTime: 2021-05-27 12:22:35
 */

/*
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

示例 1：

输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：

输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    // 二维dp。
    // dp[i, j]   以 i, j 结尾的 最大的正方形面积。
    // dp[i, j] = dp[i-1][j],dp[i-1][j-1], dp[i][j-1]
    let dp = [];
    let maxResult = 0;
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if (!dp[i]) {
            dp[i] = [];
        }
        for (let j = 0; j < row.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = +matrix[i][j];
                maxResult = maxResult > dp[i][j] ? maxResult : dp[i][j];
            }
            else {
                const top = dp[i-1][j];
                const topLeft = dp[i-1][j-1];
                const left = dp[i][j-1];
                if (matrix[i][j] === '0') {
                    dp[i][j] = 0;
                }
                else if (top === 0 || left === 0 || topLeft === 0) {
                    dp[i][j] = +matrix[i][j];
                    maxResult = maxResult > dp[i][j] ? maxResult : dp[i][j];

                }
                else {
                    const roundMin = Math.min(top, topLeft, left);
                    dp[i][j] = (Math.sqrt(roundMin) + 1) ** 2;
                    maxResult = maxResult > dp[i][j] ? maxResult : dp[i][j];
                }
            }
        }
    }
    console.log(dp);
};

let matrix = [["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]]
maximalSquare(matrix);