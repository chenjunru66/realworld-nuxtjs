/*
 * @Author: your name
 * @Date: 2021-02-09 18:12:40
 * @LastEditTime: 2021-02-10 21:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\article.js
 */
import { request } from '@/plugins/request'
// 文章列表
export const getArticle = params => {
    return request({
        method: "get",
        url: "/api/articles",
        params,
    })
}
// 用户关注文章列表
export const getFeedArticle = params => {
    return request({
        method: "get",
        url: "/api/articles/feed",
        params,
        // 这种写死的方式并不好，应该使用axios的拦截器interceptors统一设置
        // headers: {
        //     // 添加用户身份，数据格式：Token空格Token数据
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQxNDg1LCJ1c2VybmFtZSI6ImNoZW5qdW5ydSIsImV4cCI6MTYxODEyMTgyMX0.SAu--0Qr5-y6hsz-hdVXsdG2bWqWJzG75v80n2azsLw`
        // }
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}
// 获取文章详情
export const getArticleDetail = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}
// 删除文章评论
export const deleteComment = param => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${param.slug}/comments/${param.id}`
    })
}
// 添加文章评论
export const postComment = (param, slug) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data: param
    })
}