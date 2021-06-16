/*
 * @Descripttion: https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @Author: huanghao
 * @Date: 2021-05-24 14:18:06
 * @LastEditTime: 2021-05-24 14:19:03
 */

/*
给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
 

说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。
*/

var intersect = function(nums1, nums2) {
    const sortFn = (i, j) => i - j;
    nums1 = nums1.sort(sortFn);
    nums2 = nums2.sort(sortFn);
    const result = [];
    for(let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 === undefined || num2 === undefined) {
            break;
        }
        if (num1 < num2) {
            i++
        }
        else if (num1 > num2) {
            j++
        }
        else {
            i++;
            j++;
            result.push(num1);
        }
    }
    return result;
};