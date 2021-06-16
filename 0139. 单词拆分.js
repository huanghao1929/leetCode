/*
 * @Descripttion: https://leetcode-cn.com/problems/word-break/
 * @Author: huanghao
 * @Date: 2021-05-25 19:41:11
 * @LastEditTime: 2021-05-26 14:49:19
 */

/*
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    // 把问题转化成，能否用 字典 中的 字符串，组成 s。
    // 转化成了多重背包问题。
    let dp = new Array(s.length + 1).fill(false);

    // dp[i][j] wordDict 中前i个字符串，能否组成s中前j个字符的字符串
    // dp[i][j] = 不用第i个字符串，那么就是 dp[i-1][j]  wordDict中前i - 1个字符串，能否组成s中前j个字符的字符串
    //              用1次 第i个字符串，那么就是dp[i-1][j-s.len]  wordDict中前i - 1个字符串，能否组成s中剩余字符串
    // dp[i][j-s.len] = 不用第i个字符串，那么就是 dp[i-1][j-s.len]  wordDict中前i - 1个字符串，能否组成s中剩余的字符串

    // dp[j] = dp[j] || dp[j-s.len];
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const wordLen = wordDict[j].length;
            if (i >= wordLen && s.substring(i-wordLen, i) === wordDict[j]) {
                dp[i] = dp[i] || dp[i - wordLen];
                break;
            }
        }
    }
    console.log(dp);
    return dp.pop();
};

// let s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// let s = "leetcode", wordDict = ["leet","code"]
let s = "applepenapple", wordDict = ["apple","pen"]

wordBreak(s, wordDict);