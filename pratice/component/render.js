import Vue from 'vue'

const component = {
  props: ['propOne'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  data () {
    return {
      value: 'component value',
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  render (h) {
    return h('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.propOne
    ])
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: 12345
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp">
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        propOne: this.value
      },
      // on: { // 需要在组件上定义触发
      //   click: this.handleClick
      // },
      nativeOn: { // 绑定到组件根节点
        click: this.handleClick
      }
    }, [
      createElement('span', {
        ref: 'span',
        slot: 'header',
        domProps: { // 设置了domProps替代掉了下面的this.value
          innerHTML: `<span>aaa</span>`
        },
        attrs: {
          id: 'test-id'
        }
      }, this.value)
    ])
  }
})
