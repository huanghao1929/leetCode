/*
 * @Descripttion:
 * @Author: huanghao
 * @Date: 2021-01-26 14:54:12
 * @LastEditTime: 2021-01-27 14:09:22
 */
/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：
输入：n = 1
输出：["()"]
 
提示：
1 <= n <= 8
*/

/**
 * @description 基础递归
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     const vaild = '()';
//     if (n === 1) {
//         return ['()'];
//     }
//     // 递归处理
//     const lastVaild = generateParenthesis(n - 1);
//     let result = [];
//     // 上一次的数据插入 '()'， 在每个位置，之后去重。
//     for (let i = 0; i < lastVaild.length; i++) {
//         // 将当前字符串分割成数组，利于插入
//         let currComb = lastVaild[i].split('');
//         // 在每个位置插入一次，放入结果区，并恢复现场，因为splice回修改原数组
//         for (let j = 0; j <= currComb.length; j++) {
//             currComb.splice(j, 0, vaild);
//             result.push(currComb.join(''));
//             currComb = lastVaild[i].split('');
//         }
//     }
//     // 去重，也可在push的时候去重
//     result = [...new Set(result)];
//     return result;
// };

/**
 * @description DFS
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function dfs(n, leftCount, rightCount, currStr) {
        // 最后一位 结束当前递归，dfs一定要有结束条件
        if (leftCount === n && rightCount === n) {
            result.push(currStr);
            return;
        }
        else {
            // 括号插入条件： 1. 任意前缀中 左括号的数量 >= 右括号的数量。
            // 2. 结束的时候左括号的数量 === 右括号的数量
            if (leftCount <= n) {
                dfs(n, leftCount + 1, rightCount, currStr + '(');
            }
            if (rightCount <= n && leftCount > rightCount) {
                dfs(n, leftCount, rightCount + 1, currStr + ')');
            }
        }
    }
    dfs(n, 0, 0, '');
    return result;
};

generateParenthesis(3)