/*
 * @Descripttion: https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * @Author: huanghao
 * @Date: 2021-05-20 15:40:18
 * @LastEditTime: 2021-05-20 17:21:30
 */

const M = require("minimatch");

/*
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

示例 1：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
示例 2：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
 
提示：

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matix[i][j] <= 109
每行的所有元素从左到右升序排列
每列的所有元素从上到下升序排列
-109 <= target <= 109
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let x = 0;
    let y = n - 1;
    while(x < m && y >= 0) {
        const findNum = matrix[x][y];
        if (target === findNum) {
            return true;
        }
        else if (target > findNum) {
            x++;
        }
        else {
            y--;
        }
    }
    return false;
};

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;

console.log(searchMatrix(matrix, target));