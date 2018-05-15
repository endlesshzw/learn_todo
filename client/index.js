import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('beforEach invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach invoked')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
