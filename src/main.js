import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import Home from './pages/Home.vue'
import Detail from './pages/Detail.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
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
    {
      path: '/services',
      component: Services
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
