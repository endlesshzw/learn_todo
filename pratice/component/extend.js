import Vue from 'vue'

const component = {
  // props: ['active', 'propOne'] // 也行 没有验证不够严谨
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model.number="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  }
}

const parent = new Vue({
  name: 'parent'
})

const componentChild = {
  extends: component, // 继承
  data () {
    return {
      text: 2
    }
  },
  mounted () {
    console.log('compChild mounted')
    console.log(this.$parent.$options.components)
    this.$parent.text = '12345' //
    console.log(this.$parent.$options.name)
  }
}

new Vue({ // 只有通过new Vue 才能制定parent
  parent: parent,
  name: 'Rooter',
  el: '#root',
  components: {
    Comp: componentChild
  },
  template: `
  <div>
    <span>{{text}}</span>
    <comp></comp>
  </div>
  `,
  data () {
    return {
      text: 3
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
  }
})

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: { // 直接声明组件传props要用propsData
//     propOne: 'xxx'
//   },
//   data () { // 这里的data会与组件内部的data合并且覆盖掉组件内部声明的data
//     return {
//       text: 1
//     }
//   }
// })
