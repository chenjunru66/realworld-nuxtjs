/*
 * @Author: your name
 * @Date: 2021-02-10 15:12:10
 * @LastEditTime: 2021-02-10 15:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\plugins\day.js
 */
import Vue from 'vue'
import dayjs from 'dayjs'

// {{ 表达式 | 过滤器 }}
Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(value).format(format)
})
