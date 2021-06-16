/*
 * @Descripttion: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @Author: huanghao
 * @Date: 2021-01-25 10:34:40
 * @LastEditTime: 2021-01-26 14:28:41
 */

/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//     let result = [];
//     let wordsArr = [
//         [],
//         [],
//         ['a', 'b', 'c'],
//         ['d', 'e', 'f'],
//         ['g', 'h', 'i'],
//         ['j', 'k', 'l'],
//         ['m', 'n', 'o'],
//         ['p', 'q', 'r', 's'],
//         ['t', 'u', 'v'],
//         ['w', 'x', 'y', 'z']
//     ]
//     // digits   仅包含数字 2-9 的字符串
//     const inpuNum = digits.split('').reverse();

//     while(inpuNum.length) {
//         const words = wordsArr[inpuNum.pop()];
//         // ['a', 'b', 'c'], ['d', 'e', 'f'] => ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
//         result = f(result, words);
//     }
//     return result;
// };

var letterCombinations = function(digits) {
    let result = [];
    if (digits.length === 0) {
        return result;
    }
    let wordsArr = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    /**
     *
     * @param {*} digits 所有数
     * @param {*} u 当前数
     * @param {*} path 当前路径
     */
    function dfs(digits, u, path = '') {
        if (u === digits.length) {
            result.push(path);
        }
        else {
            for (let i = 0; i < wordsArr[digits[u]].length; i++) {
                const element = wordsArr[digits[u]][i];
                // 递归调用，path记录当前已经选的字母，多重递归。
                dfs(digits, u + 1, path + element);
            }
        }
    }
    dfs(digits, 0);
    return result;
};

letterCombinations('23');