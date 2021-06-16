/*
 * @Descripttion:
 * @Author: huanghao
 * @Date: 2021-01-03 15:54:48
 * @LastEditTime: 2021-01-03 16:09:34
 */
var longestCommonPrefix = function(strs) {
    let pre = "";
    let cur = "";

    for (let i = 0; i < strs[0].length; i++) {
        debugger;
        cur = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i] != cur) {
                return pre;
            }
        }
        pre += cur;
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]))