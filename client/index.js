import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watch', newCount)
// }) // 观察第一个函数的表达式， 有改变就调用第二个函数

// store.subscribe((mutation, state) => { // 任何mutation调用的时候都能拿到的回调
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// store.subscribeAction((actions, state) => { // 任何action调用的时候都能拿到的回调
//   console.log(actions.type)
//   console.log(actions.payload)
// })

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
  store,
  render: (h) => h(App)
}).$mount('#root')
