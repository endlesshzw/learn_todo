import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    styles: {
      color: 'red'
    },
    html: `<span>234</span>`,
    aa: 'main'
  },
  // template: `
  //   <div :id='aa' @click='handleClick'>
  //     {{isActive ? 'active' : 'not active'}}
  //     {{arr.join(' ')}}
  //     <p v-html='html'></p>
  //   </div>
  // `,
  template: `
    <div 
      :class="[isActive ? 'active' : 'deactive']" @click='handleClick'
      :style="styles"
    >
      {{isActive ? 'active' : 'not active'}}
      {{arr.join(' ')}}
      <p v-html='html'></p>
    </div>
  `,
  methods: {
    handleClick () {
      alert('click event') //eslint-disable-line
    }
  }
})
