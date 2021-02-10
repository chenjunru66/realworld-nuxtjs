/*
 * @Author: your name
 * @Date: 2021-02-09 16:26:44
 * @LastEditTime: 2021-02-10 22:28:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\nuxt.config.js
 */
module.exports = {
    // 配置运行服务环境
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/day.js'
    ],
    router: {
        // 选择类名配置
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            //因为layout(布局)目录存在，会自我生成路由，如果需要清除可自定义修改, 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
            routes.splice(0);
            // 添加自定义路由规则
            routes.push(...[{
                path: '/',
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                    path: '',//默认子路由
                    name: 'home',
                    component: resolve(__dirname, 'pages/home/')
                }, {
                    path: '/login',//登录
                    name: 'login',
                    component: resolve(__dirname, 'pages/login/')
                }, {
                    path: '/register',//注册
                    name: 'register',
                    component: resolve(__dirname, 'pages/login/')
                }, {
                    path: '/profile/:username',//用户信息
                    name: 'profile',
                    component: resolve(__dirname, 'pages/profile/')
                }, {
                    path: '/settings',//设置
                    name: 'settings',
                    component: resolve(__dirname, 'pages/settings/')
                }, {
                    path: '/editor',//编辑
                    name: 'editor',
                    component: resolve(__dirname, 'pages/editor/')
                }, {
                    path: '/article/:slug',//文字详情
                    name: 'article',
                    component: resolve(__dirname, 'pages/article/')
                }]
            }])
        }
    }
}