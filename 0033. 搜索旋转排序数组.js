/*
 * @Descripttion: https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @Author: huanghao
 * @Date: 2021-05-11 15:08:37
 * @LastEditTime: 2021-05-11 19:48:27
 */

/*
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    // 找到分段点
    while(left < right) {
        const mid = left + right + 1 >> 1;
        if (nums[mid] >= nums[0]) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    // left = right = 分段点。


    if (target >= nums[0]) {
        left = 0;
    }
    else {
        left += 1;
        right = nums.length - 1;
    }

    // 找到target
    while(left < right) {
        const mid = left + right >> 1;
        if (nums[mid] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    if (nums[left] === target) {
        return left;
    }
    return -1;
};

const nums = [4,5,6,7,0,1,2], target = 0;
search(nums, target);
// console.log(search(nums, target));

// 二分，找到target同侧都有的性质。