import Vue from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.config.productionTip = false

// 加入到原型
Vue.use(VueAxios, axios)

Vue.component('loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
