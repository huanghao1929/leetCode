/*
 * @Descripttion: https://www.acwing.com/problem/content/2/
 * @Author: huanghao
 * @Date: 2021-05-25 19:07:26
 * @LastEditTime: 2021-05-25 19:35:15
 */

/*
有 N 件物品和一个容量是 V 的背包。每件物品只能使用一次。

第 i 件物品的体积是 vi，价值是 wi。

求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。
输出最大价值。

输入格式
第一行两个整数，N，V，用空格隔开，分别表示物品数量和背包容积。

接下来有 N 行，每行两个整数 vi,wi，用空格隔开，分别表示第 i 件物品的体积和价值。

输出格式
输出一个整数，表示最大价值。

数据范围
0<N,V≤1000
0<vi,wi≤1000
输入样例
4 5
1 2
2 4
3 4
4 5
输出样例：
8
*/


function bag() {
    // 背包容积 5
    // 体积: [1, 2, 3, 4];
    // 价值: [2, 4, 4, 5];
    // dp[i][j] 前i件物品使用体积为j时的价值
    let v = [0, 1, 2, 3, 4];
    let price = [0, 2, 4, 4, 5];
    const bagMax = 5;
    const dp = [];
    //
    for(let i = 0; i < v.length; i++) {
        if (!dp[i]) {
            dp[i] = new Array(v.length).fill(0);
        }
        for (let j = 0; j <= bagMax; j++) {
            if (j === 0 || i === 0) {
                dp[i][j] = 0;
            }
            else {
                if (j >= v[i]) {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - v[i]] + price[i]);
                }
                else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    }
    console.log(dp);
}
bag();