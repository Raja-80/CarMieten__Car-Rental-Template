import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4d3ad6c0 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _1d09b20a = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */))
const _4951c421 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _58690feb = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages/thanks/index" */))
const _4d78d858 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3abcbc0e = () => interopDefault(import('..\\pages\\account\\_route.vue' /* webpackChunkName: "pages/account/_route" */))
const _011ff06c = () => interopDefault(import('..\\pages\\auto-info\\_slug.vue' /* webpackChunkName: "pages/auto-info/_slug" */))
const _6df6b6aa = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3b274b0d = () => interopDefault(import('..\\pages\\cars\\_slug.vue' /* webpackChunkName: "pages/cars/_slug" */))
const _332fb6b4 = () => interopDefault(import('..\\pages\\pages\\_slug.vue' /* webpackChunkName: "pages/pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _4d3ad6c0,
    name: "contact"
  }, {
    path: "/error",
    component: _1d09b20a,
    name: "error"
  }, {
    path: "/news",
    component: _4951c421,
    name: "news"
  }, {
    path: "/thanks",
    component: _58690feb,
    name: "thanks"
  }, {
    path: "/",
    component: _4d78d858,
    name: "index"
  }, {
    path: "/account/:route?",
    component: _3abcbc0e,
    name: "account-route"
  }, {
    path: "/auto-info/:slug?",
    component: _011ff06c,
    name: "auto-info-slug"
  }, {
    path: "/blog/:slug?",
    component: _6df6b6aa,
    name: "blog-slug"
  }, {
    path: "/cars/:slug?",
    component: _3b274b0d,
    name: "cars-slug"
  }, {
    path: "/pages/:slug?",
    component: _332fb6b4,
    name: "pages-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
