import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c5fbc33 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _1816ea3f = () => interopDefault(import('../pages/cart-page/index.vue' /* webpackChunkName: "pages/cart-page/index" */))
const _033edad9 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _66d6be43 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _723fb8b0 = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _2c870826 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _96434ac8 = () => interopDefault(import('../pages/thanks/index.vue' /* webpackChunkName: "pages/thanks/index" */))
const _01f9f098 = () => interopDefault(import('../pages/wishlist/index.vue' /* webpackChunkName: "pages/wishlist/index" */))
const _f9cbf51c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1ca531fc = () => interopDefault(import('../pages/account/_route.vue' /* webpackChunkName: "pages/account/_route" */))
const _6e808432 = () => interopDefault(import('../pages/auto-info/_slug.vue' /* webpackChunkName: "pages/auto-info/_slug" */))
const _3c8ad626 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _d4772fac = () => interopDefault(import('../pages/cars/_slug.vue' /* webpackChunkName: "pages/cars/_slug" */))
const _712ccc30 = () => interopDefault(import('../pages/collections/_slug.vue' /* webpackChunkName: "pages/collections/_slug" */))
const _472ccd9f = () => interopDefault(import('../pages/pages/_slug.vue' /* webpackChunkName: "pages/pages/_slug" */))
const _42dad2ee = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _5510b02f = () => interopDefault(import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _63732741 = () => interopDefault(import('../pages/shop/_slug.vue' /* webpackChunkName: "pages/shop/_slug" */))

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
    component: _2c5fbc33,
    name: "cart"
  }, {
    path: "/cart-page",
    component: _1816ea3f,
    name: "cart-page"
  }, {
    path: "/checkout",
    component: _033edad9,
    name: "checkout"
  }, {
    path: "/contact",
    component: _66d6be43,
    name: "contact"
  }, {
    path: "/error",
    component: _723fb8b0,
    name: "error"
  }, {
    path: "/news",
    component: _2c870826,
    name: "news"
  }, {
    path: "/thanks",
    component: _96434ac8,
    name: "thanks"
  }, {
    path: "/wishlist",
    component: _01f9f098,
    name: "wishlist"
  }, {
    path: "/",
    component: _f9cbf51c,
    name: "index"
  }, {
    path: "/account/:route?",
    component: _1ca531fc,
    name: "account-route"
  }, {
    path: "/auto-info/:slug?",
    component: _6e808432,
    name: "auto-info-slug"
  }, {
    path: "/blog/:slug?",
    component: _3c8ad626,
    name: "blog-slug"
  }, {
    path: "/cars/:slug?",
    component: _d4772fac,
    name: "cars-slug"
  }, {
    path: "/collections/:slug?",
    component: _712ccc30,
    name: "collections-slug"
  }, {
    path: "/pages/:slug?",
    component: _472ccd9f,
    name: "pages-slug"
  }, {
    path: "/posts/:slug?",
    component: _42dad2ee,
    name: "posts-slug"
  }, {
    path: "/products/:slug?",
    component: _5510b02f,
    name: "products-slug"
  }, {
    path: "/shop/:slug?",
    component: _63732741,
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
