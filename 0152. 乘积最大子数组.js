/*
 * @Descripttion: https://leetcode-cn.com/problems/maximum-product-subarray/
 * @Author: huanghao
 * @Date: 2021-05-26 14:50:57
 * @LastEditTime: 2021-05-26 15:18:51
 */

/*
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），
并返回该子数组所对应的乘积。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    // 一维dp
    // dp[i] = max(dp[i-1], dp[i-1] * nums[i], nums[i])
    let dpMax = [];
    let dpMin = [];
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        dpMax[i] = Math.max(dpMax[i - 1] * num, dpMin[i - 1] * num, num);
        dpMin[i] = Math.min(dpMax[i - 1] * num, dpMin[i - 1] * num, num);
    }
    console.log(dpMax, dpMin);
    return Math.max(...dpMax);
};

// let nums = [2,3,-2,4];
let nums = [-2,0,-4];
maxProduct(nums);