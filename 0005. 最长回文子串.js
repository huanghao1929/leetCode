/*
 * @Descripttion: https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @Author: huanghao
 * @Date: 2020-11-11 16:09:13
 * @LastEditTime: 2020-11-11 19:32:45
 */

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：

// 输入: "cbbd"
// 输出: "bb"


// 中心扩散，依次枚举。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function getLengthOdd(arr, point) {
        let i = point - 1, j = point + 1;
        while (arr[i] === arr[j] && arr[i] !== undefined) {
            j++;
            i--;
        }
        j--;
        i++;
        debugger;
        return [i, j];
    }

    function getLengthEven(arr, point) {
        let i = point, j = point + 1;
        while (arr[i] === arr[j] && arr[i] !== undefined) {
            j++;
            i--;
        }
        j--;
        i++;
        return [i, j];
    }

    let inputArr = s.split('');
    let maxLength = 0;
    let maxArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        debugger;
        let tempArr = getLengthOdd(inputArr, i, maxLength);
        if (tempArr[1] - tempArr[0] + 1 > maxLength) {
            maxLength = tempArr[1] - tempArr[0] + 1;
            maxArr = tempArr;
        }

        let tempArrEven = getLengthEven(inputArr, i)
        if (tempArrEven[1] - tempArrEven[0] + 1 > maxLength) {
            maxLength = tempArrEven[1] - tempArrEven[0] + 1;
            maxArr = tempArrEven;
        }
    }

    return inputArr.slice(maxArr[0], maxArr[1] + 1).join('');
};

let s = 'aaaa'

console.log(longestPalindrome(s));