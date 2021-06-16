/*
 * @Descripttion: https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @Author: huanghao
 * @Date: 2021-05-12 11:13:58
 * @LastEditTime: 2021-05-12 13:43:58
 */

/*
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

示例 1：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true

示例 2：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
 
提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
     const m = matrix.length
     const n = matrix[0].length
    let left = 0, right = m - 1;
    while (left < right) {
        const mid = left + right + 1 >> 1;
        if (matrix[mid][0] <= target) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }

    // left / right 是目标值所在的行。

    const findArr = matrix[left];

    left = 0, right = n - 1;
    while(left < right) {
        const mid = left + right >> 1;
        if (findArr[mid] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    return findArr[left] === target;
};

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 34;

searchMatrix(matrix, target);