import Vue from 'vue'

const ChildComponent = {
  template: `<div>this is ChildComponent{{data.value}}</div>`,
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.yeye, this.data)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //      <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      value: 'component value',
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () { // 父级定义provide 子组件就能通过inject引用父级组件 provide默认不提供数据响应
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  },
  // template: `
  //   <div>
  //     <comp-one>
  //       <span slot="header">this is header</span>
  //       <span slot="body">this is body</span>
  //     </comp-one>
  //   </div>
  // `
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}} {{value}}</span>
      </comp-one>
      <input type="text" v-model="value">
    </div>
  `
})
