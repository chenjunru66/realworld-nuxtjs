/*
 * @Author: your name
 * @Date: 2021-02-09 21:52:11
 * @LastEditTime: 2021-02-09 21:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\middleware\auth.js
 */
// 验证是否登录的中间件
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user) {
        return redirect('/login')
    }
}
