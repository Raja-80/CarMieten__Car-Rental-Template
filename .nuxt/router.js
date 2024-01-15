import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fb98866a = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4a2388a7 = () => interopDefault(import('../pages/cart-page/index.vue' /* webpackChunkName: "pages/cart-page/index" */))
const _5770cf71 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _50c7d6ab = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _4df7b7e0 = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _fb49ee84 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _3496d598 = () => interopDefault(import('../pages/thanks/index.vue' /* webpackChunkName: "pages/thanks/index" */))
const _562be530 = () => interopDefault(import('../pages/wishlist/index.vue' /* webpackChunkName: "pages/wishlist/index" */))
const _d583f44c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _70d72694 = () => interopDefault(import('../pages/account/_route.vue' /* webpackChunkName: "pages/account/_route" */))
const _0a674762 = () => interopDefault(import('../pages/auto-info/_slug.vue' /* webpackChunkName: "pages/auto-info/_slug" */))
const _378e9585 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _28cf2e7c = () => interopDefault(import('../pages/cars/_slug.vue' /* webpackChunkName: "pages/cars/_slug" */))
const _528b7098 = () => interopDefault(import('../pages/collections/_slug.vue' /* webpackChunkName: "pages/collections/_slug" */))
const _a84e3ff2 = () => interopDefault(import('../pages/pages/_slug.vue' /* webpackChunkName: "pages/pages/_slug" */))
const _b0f23554 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _ad7ab672 = () => interopDefault(import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _8d71b04e = () => interopDefault(import('../pages/shop/_slug.vue' /* webpackChunkName: "pages/shop/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _fb98866a,
    name: "cart"
  }, {
    path: "/cart-page",
    component: _4a2388a7,
    name: "cart-page"
  }, {
    path: "/checkout",
    component: _5770cf71,
    name: "checkout"
  }, {
    path: "/contact",
    component: _50c7d6ab,
    name: "contact"
  }, {
    path: "/error",
    component: _4df7b7e0,
    name: "error"
  }, {
    path: "/news",
    component: _fb49ee84,
    name: "news"
  }, {
    path: "/thanks",
    component: _3496d598,
    name: "thanks"
  }, {
    path: "/wishlist",
    component: _562be530,
    name: "wishlist"
  }, {
    path: "/",
    component: _d583f44c,
    name: "index"
  }, {
    path: "/account/:route?",
    component: _70d72694,
    name: "account-route"
  }, {
    path: "/auto-info/:slug?",
    component: _0a674762,
    name: "auto-info-slug"
  }, {
    path: "/blog/:slug?",
    component: _378e9585,
    name: "blog-slug"
  }, {
    path: "/cars/:slug?",
    component: _28cf2e7c,
    name: "cars-slug"
  }, {
    path: "/collections/:slug?",
    component: _528b7098,
    name: "collections-slug"
  }, {
    path: "/pages/:slug?",
    component: _a84e3ff2,
    name: "pages-slug"
  }, {
    path: "/posts/:slug?",
    component: _b0f23554,
    name: "posts-slug"
  }, {
    path: "/products/:slug?",
    component: _ad7ab672,
    name: "products-slug"
  }, {
    path: "/shop/:slug?",
    component: _8d71b04e,
    name: "shop-slug"
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
