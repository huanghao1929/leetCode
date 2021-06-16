/*
 * @Descripttion: https://www.acwing.com/problem/content/2/
 * @Author: huanghao
 * @Date: 2020-12-10 13:53:52
 * @LastEditTime: 2020-12-10 15:06:21
 */

/**
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
*/

/**
输入样例
4 5
1 2
2 4
3 4
4 5
输出样例：
8
*/

let arr = [[1,2],[2,4],[3,4],[4,5]];
let n = 4, m = 5;

// 从前 i 个物品中选，总体积不超过 j；

function page(arr, n, m) {
    let f = [];
    let v = [], w = [];
    v[0] = 0;
    w[0] = 0;
    // 从 1 开始写入，代表意思为 前 i 件物品 及其 对应的质量
    for (let i = 1; i <= n; i++) {
        const element = arr[i - 1];
        v[i] = element[0]
        w[i] = element[1]
    }

    // 排序的原因是因为 我在更新  f[i][j] = f[i-1][j]  需要用到上一层的数据，所以需要先算第一层
    // f[i][j] = Math.max(f[i-1][j], f[i-1][j-v[i]] + w[i])   更新 j 需要使用 j-v[i] ,
    // 在当前j的左侧，所以在更新的时候，不能从左往右，只能从大到小
    for (let i = 0; i <= n; i++) {
        for (let j = m; j >= v[i]; j --) {
            // i 是当前背包可选择的前i个
            // j 是当前背包的体积

            if (i === 0 || j === 0) {
                f[j] = 0;
                continue;
            }
            // f[i][j] = Math.max(f[i-1][j], f[i-1][j-v[i]] + w[i])
            f[j] = Math.max(f[j], f[j-v[i]] + w[i])

            /**
             * f[i][j] = 0     j = 0 // 当前背包的体积为0， 所以总价值必然为0
             * f[i][j] = 0     i = 0 // 当前可取物品为前0个， 所以总价值必然为0
             * f[i][j] = Math.max(f[i-1][j], f[i-1][j-v[i]] + w[i])     j >= v[i]   // 背包总体积 > 当前体积
             * f[i][j] = f[i-1][j];     // 其他
             */
        }
        console.log(f);
    }
}

page(arr, n, m);