/*
 * @Descripttion: https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 * @Author: huanghao
 * @Date: 2021-05-27 14:40:06
 * @LastEditTime: 2021-05-27 14:58:35
 */
/*
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。


上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。


示例：

给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
 
提示：

你可以假设矩阵不可变。
会多次调用 sumRegion 方法。
你可以假设 row1 ≤ row2 且 col1 ≤ col2 。
*/

// 二维前缀和
function preSum(matrix) {
	const getNum =  (matrix, i, j) => {
		if (matrix[i]) {
			return matrix[i][j] || 0;
		}
		return 0;
	}
  	let dp = [];
	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		if (!dp[i]) {
			dp[i] = [];
		}
		for (let j = 0; j < row.length; j++) {
			const col = row[j];
			if (i === 0 && j === 0) {
				dp[i][j] = matrix[i][j];
			}
			else {
				dp[i][j] = getNum(dp, i-1, j)+ getNum(dp, i, j-1) + getNum(matrix, i, j) - getNum(dp, i-1, j-1);
			}
		}
	}
	console.log(dp);
}

let matrix = [
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5]
];

preSum(matrix);

