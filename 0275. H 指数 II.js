/*
 * @Descripttion: https://leetcode-cn.com/problems/h-index-ii/
 * @Author: huanghao
 * @Date: 2021-05-20 17:25:37
 * @LastEditTime: 2021-05-21 17:41:33
 */

/*
给定一位研究者论文被引用次数的数组（被引用次数是非负整数），数组已经按照 升序排列 。编写一个方法，计算出研究者的 h 指数。

h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）
总共有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）"

 
示例:

输入: citations = [0,1,3,5,6]
输出: 3
解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
     由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
 
说明:

如果 h 有多有种可能的值 ，h 指数是其中最大的那个。

进阶：

这是 H 指数 的延伸题目，本题中的 citations 数组是保证有序的。
你可以优化你的算法到对数时间复杂度吗？
*/


/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    const len = citations.length;
    // 0 - len。
    let left = 0, right = len;
    while(left < right) {
        const mid = left + right + 1 >> 1;
        if (check(mid, citations)){
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }

    function check(num, citations) {
        // 1. citations中，有 >= num 的数量有num个。
        // 2. citations中，citations.length - num 个数，< num
        // 升序，所以找到第一个大于等于num的数就行了。
        let left = 0, right = len;
        while(left < right) {
            const mid = left + right >> 1;
            if (citations[mid] >= num) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        return  citations.length - left >= num;
    }

    return left;
};


console.log(hIndex([0,1,3,5,6]));