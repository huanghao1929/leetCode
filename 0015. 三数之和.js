/*
 * @Descripttion: https://leetcode-cn.com/problems/3sum/
 * @Author: huanghao
 * @Date: 2021-01-03 15:32:47
 * @LastEditTime: 2021-01-24 11:56:55
 */

/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((i, j) => i - j);
    for (let startPoint = 0; startPoint < nums.length; startPoint++) {
        // 如果前指针的当前数字和前一个数字相等，则跳过对当前数字的判断
        if (nums[startPoint] === nums[startPoint - 1]) {
            continue;
        }
        for (let  midPoint = startPoint + 1, endPoint = nums.length - 1; midPoint < endPoint; midPoint++){
            // 如果当前中间的数字，和前一个数字相同，则跳过。(和首指针相同，不跳过)
            if (midPoint > startPoint + 1 && nums[midPoint] === nums[midPoint - 1]) {
                continue;
            }
            // 尾指针下一个数满足的条件，不和中间的指针重叠，且下一个数只和 >= 0 因为从大到小排序
            while (midPoint < endPoint - 1 && nums[startPoint] + nums[midPoint] + nums[endPoint - 1] >= 0) {
                endPoint--;
            }
            if (nums[startPoint] + nums[midPoint] + nums[endPoint] === 0) {
                result.push([nums[startPoint], nums[midPoint], nums[endPoint]])
            }
        }
    }
    return result;
};

const nums = [3,0,-2,-1,1,2];
console.log(threeSum(nums));

// -4 -1 -1 0 1 2