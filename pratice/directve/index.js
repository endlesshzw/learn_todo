import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-if="active" v-on:click="text++">Text: {{text}}</div>
      <div v-else-if="text === 0">Else content</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <input type="text" v-model="text"></br>
      <input type="num" v-model.number="num">
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" v-model="arr" :value="1">
        <input type="checkbox" v-model="arr" :value="2">
        <input type="checkbox" v-model="arr" :value="3">
      </div>
      <div>
        <input type="radio" v-model="picked" value="one">
        <input type="radio" v-model="picked" value="two">
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{index}} : {{item}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, idx) in obj" :key="key">{{key}} : {{val}} : {{idx}}</li>
      </ul>
    </div>
  `,
  data: {
    num: 1,
    arr: [2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: true,
    html: `<span>this is html</span>`
  }
})
