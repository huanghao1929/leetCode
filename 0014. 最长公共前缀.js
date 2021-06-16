/*
 * @Descripttion: https://leetcode-cn.com/problems/longest-common-prefix/
 * @Author: huanghao
 * @Date: 2021-01-03 15:14:57
 * @LastEditTime: 2021-01-03 15:32:05
 */

/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"

示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // 找到两个字符串前面相同的部分
    function findSameStart(str1, str2) {
        let sameStr = '';
        const len = str1.length > str2.length ? str2.length : str1.length;
        for (let i = 0; i < len; i++) {
            if (str1[i] === str2[i]) {
                sameStr += str1[i];
            }
            else {
                break;
            }
        }
        return sameStr;
    }

    // 避免传入空对象
    let result = strs[0] ? strs[0] : '';

    for (let index = 1; index < strs.length; index++) {
        const str = strs[index];
        // 更新结果为两个数组相同的头部
        result = findSameStart(result, str)
    }
    return result;
};

longestCommonPrefix([]);