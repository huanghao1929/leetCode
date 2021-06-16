/*
 * @Descripttion: https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 * @Author: huanghao
 * @Date: 2021-05-12 13:44:50
 * @LastEditTime: 2021-05-12 15:05:36
 */

/*
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。
如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
 
提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    // 使左右两侧性质不同，具有二段性。
    while(left < right && nums[left] === nums[right]) {
        right--
    }
    while(left < right) {
        const mid = left + right + 1 >> 1;
        if (nums[mid] >= nums[0]) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }

    // left / right 是 左侧有序的最后一个数
    if (target >= nums[0]) {
        left = 0
    }
    else {
        left += 1;
        right = nums.length - 1;
    }

    while(left < right) {
        const mid = left + right >> 1;
        if (nums[mid] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return nums[left] === target;

};

let nums = [1, 2, 0, 1, 1, 1], target = 0;
search(nums, target);