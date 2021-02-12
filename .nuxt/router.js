import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4a29662 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _96fe5878 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _485c25b8 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _083204a4 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _e162bef0 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _dc4049dc = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2207701e = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _c4a29662,
    children: [{
      path: "",
      component: _96fe5878,
      name: "home"
    }, {
      path: "/login",
      component: _485c25b8,
      name: "login"
    }, {
      path: "/register",
      component: _485c25b8,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _083204a4,
      name: "profile"
    }, {
      path: "/settings",
      component: _e162bef0,
      name: "settings"
    }, {
      path: "/editor",
      component: _dc4049dc,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2207701e,
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
