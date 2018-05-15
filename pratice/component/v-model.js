import Vue from 'vue'

const component = {
  model: {
    prop: 'valueOne',
    event: 'change'
  },
  props: ['valueOne'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="valueOne">
    </div>
  `,
  methods: {
    handleInput (e) {
      // this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  // template: `
  //   <div>
  //     <comp-one :valueOne="value" @change="value = arguments[0]"></comp-one>
  //   </div>
  // `
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})
