/*
 * @Descripttion: https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @Author: huanghao
 * @Date: 2021-05-24 10:50:09
 * @LastEditTime: 2021-05-24 11:11:53
 */

/*
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 
提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const limitArr = [];
    while(nums.length !== 0) {
        const num = nums.shift();
        if (limitArr.length === 0) {
            limitArr.push(num);
            continue;
        }
        let left = 0, right = limitArr.length - 1;
        if (num > limitArr[right]) {
            limitArr.push(num);
            continue;
        }
        while(left < right) {
            const mid = left + right >> 1;
            if (limitArr[mid] >= num) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        limitArr[left] = num;
    }

    return limitArr.length;
};

const nums = [10,9,2,5,3,7,101,18];

console.log(lengthOfLIS(nums));