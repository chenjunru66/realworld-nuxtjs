/*
 * @Author: your name
 * @Date: 2021-02-12 18:34:44
 * @LastEditTime: 2021-02-12 19:06:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \realworld-nuxtjs\api\setting.js
 */

import { request } from '@/plugins/request'
// 更新信息
export const updateUser = data => {
    return request({
        method: "PUT",
        url: "/api/user",
        data,
    })
}
