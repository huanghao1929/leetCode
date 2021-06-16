/*
 * @Descripttion: https://leetcode-cn.com/problems/implement-strstr/
 * @Author: huanghao
 * @Date: 2021-01-27 15:19:05
 * @LastEditTime: 2021-01-27 15:19:46
 */

/*
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
*/

/**
 * @description KMP 算法实现！！而不是调用库函数
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};