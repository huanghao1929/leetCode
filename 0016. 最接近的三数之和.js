/*
 * @Descripttion: https://leetcode-cn.com/problems/3sum-closest/
 * @Author: huanghao
 * @Date: 2021-01-24 10:49:10
 * @LastEditTime: 2021-01-24 11:15:09
 */

/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 存放不同
    let result = [];
    nums.sort((i, j) => i - j);
    for (let startPont = 0; startPont < nums.length; startPont++) {
        if (nums[startPont] === nums[startPont - 1]) {
            continue;
        }
        for (let midPoint = startPont + 1, endPoint = nums.length - 1; midPoint < endPoint; midPoint++) {
            if (midPoint > startPont + 1 && nums[midPoint] === nums[midPoint - 1]) {
                continue;
            }
            while (nums[startPont] + nums[midPoint] + nums[endPoint - 1] >= target) {
                // 减无可减的情况
                if (endPoint - 1 === midPoint) {
                    console.log(startPont, midPoint, endPoint);
                    result.push(nums[startPont] + nums[midPoint] + nums[endPoint]);
                }
                endPoint --
            }
            // 如果有了差距，就要判断谁距离target更接近
            if (endPoint > midPoint && nums[startPont] + nums[midPoint] + nums[endPoint - 1] < target) {
                const greaterThanTarget = nums[startPont] + nums[midPoint] + nums[endPoint];
                const lessThanTarget = nums[startPont] + nums[midPoint] + nums[endPoint - 1];
                if (greaterThanTarget - target > target - lessThanTarget) {
                    result.push(lessThanTarget);
                }
                else {
                    result.push(greaterThanTarget);
                }
            }
        }
    }
    // 每个数字对应的最接近的三个数，存放的数组，需要找到谁和target最接近
    result.sort((a, b) => Math.abs(a -target) - Math.abs(b - target));
    return result[0];
};

let nums = [-1,2,1,-4], target = 1;

console.log(threeSumClosest(nums, target));