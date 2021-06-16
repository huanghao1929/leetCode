/*
 * @Descripttion: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @Author: huanghao
 * @Date: 2020-11-09 15:06:50
 * @LastEditTime: 2020-11-09 15:48:44
 */
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLength = s.length > 0 ? 1 : 0;
    for (let i = 0, j = 0; i < s.length && j < s.length;) {
        if (map[s[j]]) {
            delete map[s[i]]
            i++
        }
        else {
            map[s[j]] = 1;
            j++
        }
        maxLength = maxLength > j - i? maxLength : j - i;
    }
    return maxLength;
};

let s = 'au';

console.log(lengthOfLongestSubstring(s))