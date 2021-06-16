/*
 * @Descripttion: https://www.acwing.com/problem/content/3/
 * @Author: huanghao
 * @Date: 2020-12-10 13:53:52
 * @LastEditTime: 2021-05-26 14:20:58
 */

/**
有 N 种物品和一个容量是 V 的背包，每种物品都有无限件可用。

第 i 种物品的体积是 vi，价值是 wi。

求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。
输出最大价值。

输入格式
第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。

接下来有 N 行，每行两个整数 vi,wi，用空格隔开，分别表示第 i 种物品的体积和价值。

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
10
*/

let arr = [[1,2],[2,4],[3,4],[4,5]];
let n = 4, m = 5;

// 从前 i 个物品中选，总体积不超过 j；

// 0 1背包问题， 以下一个物品是否选择为划分，
// 完全背包问题， 以下一个物品选择的个数为划分依据。  0 1 2 3 4 ... 直至选中个数 * 物品体积 > 总体积

function page(arr, n, m) {
    let f = [];
    let v = [], w = [];
    v[0] = 0
    w[0] = 0
    // 从 1 开始写入，代表意思为 前 i 件物品 及其 对应的质量
    for (let i = 1; i <= n; i++) {
        const element = arr[i - 1];
        v[i] = element[0]
        w[i] = element[1]
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j ++) {
            // i 是当前背包可选择的前i个
            // j 是当前背包的体积
            if (!f[i]) {
                f[i] = [];
            }

            if (i === 0 || j === 0) {
                f[i][j] = 0;
                continue;
            }

            if (j-v[i] >= 0) {
                // f[i][j] = Math.max(f[i-1][j], f[i-1][j-v[i]] + w[i], f[i-1][j-2*v[i]] + 2*w[i]......)
                // f[i][j-v[i]] = Math.max(f[i-1][j-v[i]], f[i-1][j-2*v[i]] + w[i], f[i-1][j-3*v[i]] + 2*w[i]......)
                // (f[i-1][j-v[i]] + w[i], f[i-1][j-2*v[i]] + 2*w[i]......) = f[i][j-v[i]] + w[i]
                f[i][j] = Math.max(f[i-1][j], f[i][j-v[i]] + w[i])
            }
            else {
                f[i][j] = f[i-1][j]
            }
        }
    }
    console.log(f);
}

page(arr, n, m);