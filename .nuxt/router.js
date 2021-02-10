import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _747f2a6d = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _cce3ce3c = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _cf256874 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0b7042c6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _184fb2b4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _68b050b0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _1b8af3da = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _747f2a6d,
    children: [{
      path: "",
      component: _cce3ce3c,
      name: "home"
    }, {
      path: "/login",
      component: _cf256874,
      name: "login"
    }, {
      path: "/register",
      component: _cf256874,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0b7042c6,
      name: "profile"
    }, {
      path: "/settings",
      component: _184fb2b4,
      name: "settings"
    }, {
      path: "/editor",
      component: _68b050b0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _1b8af3da,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
