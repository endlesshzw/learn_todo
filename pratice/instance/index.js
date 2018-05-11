import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">this is {{text}} {{obj.a}}</div>',
  data () {
    return {
      text: 0,
      obj: {}
    }
  }
})

app.$mount('#root')
// let i = 0
setInterval(() => {
  // i++
  app.text += 1
  // app.$set(app.obj, 'a', i)
  // app.obj.a = i
  // app.$forceUpdate() // obj里没有声明的属性，后再声明修改该属性无效。使用forceUpdate强制组件重新渲染，不建议使用。
  // app.$options.data.text += 1 //无效
  // app.$data.text += 1
}, 1500)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// 在重新渲染（数据变化）时才会生效。
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slot)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer) // ssr的时候用到，判断是否是服务端渲染。
// const unWatch = app.$watch('text', (newt, oldt) => {
//   console.log(`${newt} : ${oldt}`)
// })
// 返回的unWatch做方法执行可以销毁watch
// setTimeout(() => {
//   unWatch()
// }, 3000)

// app.$on('test', (a, b) => {
//   console.log(`text emited ${a} ${b}`)
// })

// app.$emit('test', 1, 2)
