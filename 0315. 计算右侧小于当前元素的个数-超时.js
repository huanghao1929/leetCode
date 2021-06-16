/*
 * @Descripttion: https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self
 * @Author: huanghao
 * @Date: 2021-05-24 11:13:19
 * @LastEditTime: 2021-05-24 11:35:54
 */

/*
给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质：
counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

 
示例：

输入：nums = [5,2,6,1]
输出：[2,1,1,0]
解释：
5 的右侧有 2 个更小的元素 (2 和 1)
2 的右侧仅有 1 个更小的元素 (1)
6 的右侧有 1 个更小的元素 (1)
1 的右侧有 0 个更小的元素

提示：

0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    const counts = new Array(nums.length).fill(0);
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        let count = 0;
        for (let j = i; j < nums.length; j++) {
            const element = nums[j];
            if (element > num) {
                count = counts[j];
            }
        }
        counts[i] = count;
    }
    return counts;
};

console.log(countSmaller([5,10,11,1]));