/*
 * @Descripttion: https://leetcode-cn.com/problems/container-with-most-water/
 * @Author: huanghao
 * @Date: 2020-12-11 14:16:17
 * @LastEditTime: 2020-12-11 14:54:25
 */

const M = require("minimatch");

/*
给你 n 个非负整数 a1，a2，...，an，
每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
*/

/*
输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例 2：

输入：height = [1,1]
输出：1

示例 3：

输入：height = [4,3,2,1,4]
输出：16

示例 4：

输入：height = [1,2,1]
输出：2
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 找到数组中两个数 其 min(a1, a2) * (|a2 - a1|) 是最大
    // 双指针。
    // 一头一尾 ， 比较二者，移动较小的数。
    // 必然会经过 答案的两个数。  可通过反证法。
    let i = 0, j = height.length - 1;
    let maxResult = 0;
    while (j > i) {
        let width = j - i;
        let minner = height[i] < height[j] ? height[i++] : height[j--];
        maxResult = Math.max(maxResult, minner * width);
    }
    return (maxResult);
};

let height = [1,8,6,2,5,4,8,3,7];

maxArea(height);