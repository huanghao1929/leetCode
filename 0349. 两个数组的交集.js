/*
 * @Descripttion: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @Author: huanghao
 * @Date: 2021-05-24 12:43:27
 * @LastEditTime: 2021-05-24 14:18:40
 */

/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
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
        if (num1 === nums1[i + 1]) {
            i++
            continue
        }
        if (num2 === nums2[j + 1]) {
            j++
            continue
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


const nums1 = [21,47,80,4,3,24,87,12,22,11,48,6,89,80,74,71,74,55,58,56,4,98,40,66,49,53,62,27,3,66,78,24,48,69,88,12,80,63,98,65,46,35,72,5,64,72,7,29,37,3,2,75,44,93,79,78,13,39,85,26,15,41,87,47,29,93,41,74,6,48,17,89,27,61,2,68,99,57,45,73,25,33,38,32,58]
const nums2 = [1,39,6,81,85,10,38,22,0,89,57,93,58,69,65,80,84,24,27,54,37,36,26,88,2,7,24,36,51,5,74,57,45,56,55,67,25,33,78,49,16,79,74,80,36,27,89,49,64,73,96,60,92,31,98,72,22,31,0,93,70,87,80,66,75,69,81,52,94,90,51,90,74,36,58,38,50,9,64,55,4,21,49,60,65,47,67,8,38,83];

console.log(intersection(nums1, nums2));

