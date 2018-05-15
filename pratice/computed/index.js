import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      Name : {{fullName}} </br>
      Name : {{getName()}} </br>
      Num : <input type="text" v-model="num"></br>
      name : {{name}} </br>
      first : <input type="text" v-model="firstName"></br>
      last : <input type="text" v-model="lastName"></br>
      name : <input type="text" v-model="fullName"></br>
      obj.a : <input type="text" v-model="obj.a"></br>
    </div>
  `,
  data: {
    firstName: 'Ho',
    lastName: 'Zw',
    num: 0,
    name: '',
    obj: {
      a: 123
    }
  },
  mounted () {
    // this.obj.a = {
    //   a: '345'
    // },
    this.obj.a = '345'
  },
  computed: {
    fullName: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) { // 一般不设置set方法
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.name = `${newName} ${this.lastName}`
      },
      immediate: true, // 默认为false不执行
      deep: true
    },
    // obj: {
    //   handler (newName, oldName) {
    //     console.log('obj.a change')
    //   },
    //   immediate: true, // 默认为false一开始不执行，有数据变动才执行。
    //   deep: true // 默认false，只监听obj的改动，直接修改obj.a属性不触发。true为深度监听都可触发。
    // },
    'obj.a': { // 高级用法，字符串可深度解析，触发。
      handler (newName, oldName) {
        console.log('obj.a change')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
