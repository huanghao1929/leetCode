/*
 * @Descripttion: https://leetcode-cn.com/problems/reverse-integer/
 * @Author: huanghao
 * @Date: 2020-11-30 19:22:32
 * @LastEditTime: 2020-11-30 20:15:41
 */

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转

/*
示例 1:

输入: 123
输出: 321

 示例 2:

输入: -123
输出: -321

示例 3:

输入: 120
输出: 21

注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 数学思路。
    let tempx = 0;
    const maxNum = Math.pow(2, 31)
    // x % 10 = 个位数  之后将其整除，移除个位数

    while(x) {
        tempx = tempx * 10 + (x % 10);
        x = x / 10 >> 0;
    }
    debugger;
    if(tempx <= maxNum || tempx >= maxNum - 1){
        return 0
    }else{
        return tempx
    }
};

console.log(reverse(123))
