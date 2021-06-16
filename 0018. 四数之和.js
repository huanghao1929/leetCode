/*
 * @Descripttion: https://leetcode-cn.com/problems/4sum/
 * @Author: huanghao
 * @Date: 2021-01-25 16:29:48
 * @LastEditTime: 2021-01-25 17:11:35
 */

/**
给定一个包含 n 个整数的数组 nums 和一个目标值 target，
判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？
找出所有满足条件且不重复的四元组。

注意：
答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    nums.sort((i, j) => i - j);
    for (let i = 0; i < nums.length; i++) {
        const firstPoint = nums[i];
        if (nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            // 如果当前中间的数字，和前一个数字相同，则跳过。(和首指针相同，不跳过)
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            const secondPoint = nums[j];
            for (let k = j + 1, z = nums.length - 1; k < z; k++) {
                const thirdPoint = nums[k];
                if(k > j + 1 && nums[k] === nums[k - 1]) {
                    continue;
                }
                while (k < z - 1 && firstPoint + secondPoint + thirdPoint + nums[z - 1] >= target) {
                    z--;
                }
                if (firstPoint + secondPoint + thirdPoint + nums[z] === target) {
                    result.push([firstPoint, secondPoint, thirdPoint, nums[z]]);
                }
            }
        }
    }
    return result;
};

const nums = [-1,-5,-5,-3,2,5,0,4], target = -7;

fourSum(nums, target);

