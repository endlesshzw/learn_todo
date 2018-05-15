import Vue from 'vue'

const component = {
  // props: ['active', 'propOne'] // 也行 没有验证不够严谨
  props: {
    active: {
      type: Boolean,
      // required: true // 是否必须

      // default () { // 如果prop是对象 要用return
      //   return {
      //     'a': true
      //   }
      // }

      // validator (val) { // 用方法验证
      //   return typeof val === 'boolean'
      // },
      default: true // 默认值 有了这个就不需要定义required
    },
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model.number="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  mounted () {
    // this.propOne = 'inner content' // 可以修改 但是会有警告 不建议修改
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  data () {
    return {
      text: 1
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      text1: 'nonono',
      text2: 'yesyesyes'
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange () {
      this.text1 += 1
    }
  },
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="text1" @change="handleChange"></comp-one>
      <comp-one :active="true" :prop-one="text2"></comp-one>
    </div>
  `
})
