/*
 * @Descripttion: https://leetcode-cn.com/problems/triangle/
 * @Author: huanghao
 * @Date: 2021-05-25 17:19:31
 * @LastEditTime: 2021-05-26 14:06:30
 */

/*
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。
相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
2
3 4
6 5 7
4 1 8 3
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：

输入：triangle = [[-10]]
输出：-10

提示：

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    // dp[i][j] = min{dp[i-1][j+1],dp[i-1][j]} + triangle[i][j]
    function findNum(triangle, i, j){
        if (triangle[i] === undefined || triangle[i][j] === undefined) {
            return Infinity;
        }
        return triangle[i][j];
    }
    let dp = [];
    const m = triangle.length;
    for (let i = 0; i < m; i++) {
        const n = triangle[i].length
        if (!dp[i]) {
            dp[i] = new Array(n).fill(0);
        }
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = triangle[i][j];
            }
            else {
                dp[i][j] = Math.min(findNum(dp, i-1, j), findNum(dp, i-1, j - 1)) + triangle[i][j]
                console.log(findNum(dp, i-1, j), findNum(dp, i-1, j - 1));
                console.log(dp);
            }
        }
    }

    return Math.min(...dp[dp.length - 1]);
};

let triangle = [[1],[-5,-2],[3,6,1],[-1,2,4,-3]];
minimumTotal(triangle);