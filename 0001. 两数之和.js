/*
 * @Descripttion: https://leetcode-cn.com/problems/two-sum/
 * @Author: huanghao
 * @Date: 2020-11-09 10:56:05
 * @LastEditTime: 2021-01-03 15:35:54
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1. 双重循环         N(2)
    // 2. 排序 --> 双指针   Nlog(N)
    // 3. 哈希表           N

    // key为要存的数值，value为当前值的index
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const findNum = target - num;
        if (map[findNum] !== undefined) {
            return [map[findNum], i]
        }
        else {
            map[num] = i;
        }
    }
};

let nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target))