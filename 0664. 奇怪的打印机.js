/*
 * @Descripttion: https://leetcode-cn.com/problems/strange-printer/
 * @Author: huanghao
 * @Date: 2021-05-24 16:54:32
 * @LastEditTime: 2021-05-24 17:16:43
 */

/*
有台奇怪的打印机有以下两个特殊要求：

打印机每次只能打印由 同一个字符 组成的序列。
每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
给你一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。

示例 1：

输入：s = "aaabbb"
输出：2
解释：首先打印 "aaa" 然后打印 "bbb"。
示例 2：

输入：s = "aba"
输出：2
解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
 
提示：

1 <= s.length <= 100
s 由小写英文字母组成
*/

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    function repeatStr(s, n) {
        return new Array(n + 1).join(s)
    }
    const s2Arr = s.split('');
    const splitObj = {};
    const wordObj = {};
    for (let i = 0; i < s2Arr.length; ) {
        let curWord = s2Arr[i];
        let count = 1;
        while(s2Arr[i + 1] === curWord) {
            count++;
            i++
        }
        if (splitObj[repeatStr(curWord, count)]) {
            splitObj[repeatStr(curWord, count)]++
        }
        else {
            splitObj[repeatStr(curWord, count)] = 1
        }
        i++
    }
    console.log(splitObj);

    const splitS = Object.keys(splitObj);
    for (let i = 0; i < splitS.length; i++) {
        const string = splitS[i];
        if (wordObj[string[0]]) {
            wordObj[string[0]]++
        }
        else {
            wordObj[string[0]] = 1
        }
    }
    console.log(wordObj);
};

strangePrinter('aaabbcba');