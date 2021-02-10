/*
 * @Author: your name
 * @Date: 2021-02-09 21:58:19
 * @LastEditTime: 2021-02-09 22:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\middleware\noAuth.js
 */
// 验证已经登录的中间件
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.user) {
        return redirect('/')
    }
}