/*
 * @Descripttion: https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * @Author: huanghao
 * @Date: 2021-05-12 16:49:03
 * @LastEditTime: 2021-05-12 17:52:48
 */

/*
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
如果不存在符合条件的子数组，返回 0 。

 
示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 
提示：

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
进阶：

如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0;
    let resultLength = 0;
    let areaSum = 0;
    while(right < nums.length) {
        if (areaSum >= target) {
            areaSum -= nums[left];
            left++;
            resultLength = resultLength === 0 ? nums.length : resultLength;
            resultLength = resultLength > right - left + 1 ? right - left + 1: resultLength;
        }
        else {
            areaSum += nums[right];
            right++
        }
    }

    while(areaSum >= target) {
        areaSum -= nums[left];
        left++;
        resultLength = resultLength === 0 ? nums.length : resultLength;
        resultLength = resultLength > right - left + 1 ? right - left + 1: resultLength;
    }
    return resultLength;

};

let target = 11, nums = [1,2,3,4,5];
minSubArrayLen(target, nums);