/*
 * @Descripttion: https://leetcode-cn.com/problems/valid-parentheses/
 * @Author: huanghao
 * @Date: 2021-01-26 11:05:58
 * @LastEditTime: 2021-01-26 14:16:17
 */

/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 
提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return false;
    }
    const vaildArr = [];
    const reversVaild = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const leftVaild = Object.keys(reversVaild);

    for (let i = 0; i < s.length; i++) {
        const word = s[i];
        // 左括号，入栈
        if (leftVaild.indexOf(word) > -1) {
            vaildArr.push(word);
        }
        else {
            // 右括号
            if (reversVaild[vaildArr.pop()] !== word) {
                return false;
            }
        }
    }
    // 检查是否空栈
    return vaildArr.length === 0;
};


console.log(isValid(''));