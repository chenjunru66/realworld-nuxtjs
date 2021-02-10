/*
 * @Author: your name
 * @Date: 2021-02-10 14:55:13
 * @LastEditTime: 2021-02-10 15:02:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\plugins\request.js
 */
import axios from 'axios'
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io/'
});
// 通过nuxt.js的插件机制获取上下文对象，含query，app,req,res,params,store
export default ({ store }) => {
    // 请求拦截器
    // Add a request interceptor
    // 任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理,例如统一设置 token
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 请求就会经过这里
        const { user } = store.state
        //设置token
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }

        // 返回 config 请求配置对象
        return config
    }, function (error) {
        // 如果请求失败(此时请求还没有发出去)就会进入这里
        // Do something with request error
        return Promise.reject(error)
    })
}