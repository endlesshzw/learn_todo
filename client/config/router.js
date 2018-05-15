
import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    // base: '/base/',
    scrollBehavior (to, from, savePosition) {
      if (savePosition) {
        return savePosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // parseQuery (query) { // 接收一个字符串(地址后的参数)

    // },
    // stringifyQuery (obj) { // 接收一个obj(地址后的参数)

    // },
    fallback: true, // 如果不支持前端路由 自动fallback成页面跳转
    linkActiveClass: 'active-link', // 路径部分匹配的class
    linkExactActiveClass: 'exact-active-link', // 路径完全匹配的class
    mode: 'history' // 默认hash
  })
}
