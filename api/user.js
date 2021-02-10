/*
 * @Author: your name
 * @Date: 2021-02-09 18:12:40
 * @LastEditTime: 2021-02-10 15:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\user.js
 */
import { request } from '@/plugins/request'
// 用户登录
export const login = (data) => {
    return request({
        method: "Post",
        url: "/api/users/login",
        data,
    })
}
// 用户注册
export const register = (data) => {
    return request({
        method: "Post",
        url: "/api/users",
        data,
    })
}