/*
 * @Author: your name
 * @Date: 2021-02-09 22:59:30
 * @LastEditTime: 2021-02-09 23:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\tag.js
 */

import { request } from '@/plugins/request'
// 获取文章标签列表
export const getTags = () => {
    return request({
        method: 'GET',
        url: '/api/tags'
    })
}
