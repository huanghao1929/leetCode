/*
 * @Descripttion: https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * @Author: huanghao
 * @Date: 2021-05-24 14:57:56
 * @LastEditTime: 2021-05-25 11:36:56
 */

/*
给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

示例 1：

输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
输出：13
解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
示例 2：

输入：matrix = [[-5]], k = 1
输出：-5
 
提示：

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
题目数据 保证 matrix 中的所有行和列都按 非递减顺序 排列
1 <= k <= n2
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    function smallerThanNum(matrix, num) {
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            // 第几行
            const rowArr = matrix[i];
            let lastCol = rowArr.length - 1;
            for (let j = lastCol; j >= 0; j--) {
                // 该行第几列
                const colNum = rowArr[j];
                if (colNum <= num) {
                    lastCol = j;
                    count += (j + 1);
                    break;
                }
            }
        }
        return count;
    }
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let left = matrix[0][0], right = matrix[rowLength - 1][colLength - 1];
    while(left < right) {
        const mid = left + right >> 1;
        console.log(left, right, mid);
        if (smallerThanNum(matrix, mid) >= k) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return right;
};



const matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;

console.log(kthSmallest(matrix, k));