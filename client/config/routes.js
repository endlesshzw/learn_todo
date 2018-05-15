// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app',
    path: '/app/:id', // app/xxx
    props: true, // 可以将id作为props传入Todo组件
    // props: (route) => ({ // 用方法返回 尽量不要用this.$route 解耦
    //   id: route.query.b
    // }),
    // component: Todo, // 用components获取不到props
    component: () => import('../views/todo/todo.vue'), // 异步组件
    name: 'app',
    beforeEnter (to, from, next) {
      console.log('app route beforeEnter')
      next()
    },
    meta: {
      title: 'this is app',
      description: 'written by Hozw'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login/exact',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login',
    components: {
      default: () => import('../views/login/login.vue')
    }
  }
]
