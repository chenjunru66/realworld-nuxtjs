/*
 * @Author: your name
 * @Date: 2021-02-12 19:44:02
 * @LastEditTime: 2021-02-12 21:07:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \realworld-nuxtjs\api\editor.js
 */
import { request } from '@/plugins/request'
// 创建文章
export const createArticle = data => {
    return request({
        method: "post",
        url: "/api/articles",
        data,
    })
}
// 更新文章
export const updateArticle = params => {
    return request({
        method: "PUT",
        url: "/api/articles/" + params.slug,
        data: params.article,
    })
}