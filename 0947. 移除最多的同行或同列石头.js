/*
 * @Descripttion: https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/
 * @Author: huanghao
 * @Date: 2021-01-15 16:21:54
 * @LastEditTime: 2021-01-15 17:24:20
 */

/*
n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。

如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。

给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。

示例 1：

输入：stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
输出：3
解释：一种移除 3 块石头的方法如下所示：
1. 移除石头 [2,2] ，因为它和 [2,0] 同行。
2. 移除石头 [2,0] ，因为它和 [0,0] 同列。
3. 移除石头 [0,2] ，因为它和 [0,0] 同行。
石头 [0,0] 和 [1,1] 不能移除，因为它们没有与另一块石头同行/列。

示例 2：

输入：stones = [[0,0]]
输出：0
解释：[0,0] 是平面上唯一一块石头，所以不可以移除它。
*/

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    // 过滤x重复的（非0）
    // 过滤y重复的（非0）
    // 过滤0重复的
    const tempX = {};
    const tempY = {};
    const tempZX = {};
    const tempZY = {};
    const filterStones =
        stones
        .filter(item => {
            if (!tempX[item[0]] || item[0] === 0) {
                tempX[item[0]] = true;
                return item;
            }
        })
        .filter(item => {
            if (!tempY[item[1]] || item[1] === 0) {
                tempY[item[1]] = true;
                return item;
            }
        })
        .filter(item => {
            if (!tempZX[item[0]]) {
                tempZX[item[0]] = true;
                return item;
            }
        })
        .filter(item => {
            if (!tempZY[item[1]]) {
                tempZY[item[1]] = true;
                return item;
            }
        })
    return stones.length - filterStones.length
};

let s = [[0,1],[1,0],[1,1]];

console.log(removeStones(s));