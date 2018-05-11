import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data () {
    return {
      text: 'test text'
    }
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () { // dom有关的都放在这操作
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    throw new TypeError('tpye error')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    // 测试环境使用
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 向上冒泡 正式环境可以使用
  }
})

app.$mount('#root')
