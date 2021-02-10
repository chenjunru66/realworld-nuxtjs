/*
 * @Author: your name
 * @Date: 2021-02-09 20:59:10
 * @LastEditTime: 2021-02-09 21:33:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\store\index.js
 */
const cookieparser = process.server ? require('cookieparser') : undefined;
// 在服务端渲染期间运行的是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数，返回数据对象，按需导出就行
export const state = () => {
    return {
        foo: 'bar'
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // 作用：初始化容器数据，传递数据给客户端使用
    /**
     * nuxtServerInit:是一个特殊的action方法
     * 这个方法会在服务端渲染期间自动调用
     * 作用：初始化容器数据，传递数据给客户端使用
     * req是服务端请求期间服务对象
     * 
     */
    nuxtServerInit({ commit }, { req }) {
        let user = null

        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转为 JavaScript 对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user);
    }
}