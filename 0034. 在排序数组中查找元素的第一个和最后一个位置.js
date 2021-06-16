/*
 * @Descripttion: https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @Author: huanghao
 * @Date: 2021-05-11 19:48:54
 * @LastEditTime: 2021-05-12 10:28:25
 */

/**
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 
示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

提示：
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
     const result = [-1, -1];
    //  两次二分，一次求左侧，一次求右侧
    let left = 0, right = nums.length;
    // 找到右边界
    while(left < right) {
        const mid = left + right + 1>> 1;
        if (nums[mid] <= target) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    if (nums[left] === target) {
        result[1] = left;
    }
    left = 0;
    // 左边界
    while(left < right) {
        const mid = left + right>> 1;
        if (nums[mid] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    if (nums[left] === target) {
        result[0] = left;
    }
    return result;
};

let nums = [], target = 1;

console.log(searchRange(nums, target));