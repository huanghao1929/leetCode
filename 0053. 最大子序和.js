/*
 * @Descripttion: https://leetcode-cn.com/problems/maximum-subarray/
 * @Author: huanghao
 * @Date: 2021-05-25 11:11:49
 * @LastEditTime: 2021-05-25 11:58:53
 */

/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000
 
提示：

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (i >= 1) {
            dp[i] = Math.max(dp[i - 1] + num, num);
        }
        else {
            dp[i] = num;
        }
    }
    return Math.max(...dp);
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);