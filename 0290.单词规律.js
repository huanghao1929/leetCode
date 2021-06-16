/*
 * @Descripttion: https://leetcode-cn.com/problems/word-pattern/
 * @Author: huanghao
 * @Date: 2020-12-16 14:50:53
 * @LastEditTime: 2020-12-16 15:44:55
 */

/*
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    const patternArr = pattern.split('');
    const sArr = s.split(' ');
    if (sArr.length !== patternArr.length) {
        return false;
    }
    const map = {};
    for (let index = 0; index < sArr.length; index++) {
        const sItem = sArr[index];
        const patternItem = patternArr[index];
        if (map[sItem]) {
            if (map[sItem] !== patternItem) {
                return false;
            }
        }
        else {
            if (Object.values(map).indexOf(patternItem) < 0) {
                map[sItem] = patternItem
            }
            else {
                return false;
            }
        }
    }
    console.log(map);
    return true;
};

let patten = "jquery", s = "jquery";

console.log(wordPattern(patten, s));


Object.keys(o).length;