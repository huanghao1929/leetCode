/*
 * @Descripttion: https://leetcode-cn.com/problems/spiral-matrix/description/
 * @Author: huanghao
 * @Date: 2021-05-27 15:26:21
 * @LastEditTime: 2021-05-27 16:18:32
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const resultNum = [];
    let curDir = dir.shift();
    for (let i = 0, j = 0; i < matrix.length && j < matrix[i].length;) {
        if (matrix[i][j] === undefined) {
            break;
        }
        resultNum.push(matrix[i][j]);
        matrix[i][j] = undefined;
        const lastRow = i + curDir[0];
        const lastCol = j + curDir[1];
        // console.log(lastRow, lastCol, matrix[lastRow][lastCol]);
        if (matrix[lastRow] === undefined || matrix[lastRow][lastCol] === undefined) {
            dir.push(curDir);
            curDir = dir.shift();
            [i, j] = [i + curDir[0], j + curDir[1]];
        }
        else {
            [i, j] = [lastRow, lastCol];
            // console.log[i, j];
        }
    }
    return resultNum;
};

// spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
// @lc code=end

