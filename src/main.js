import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import About from '@/pages/About'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(BootstrapVue)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
     component: Home
    }, 
    {
      path: '/detail',
     component: Detail
    },
    {
      path: '/about',
     component: About
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
