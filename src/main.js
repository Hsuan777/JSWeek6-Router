import Vue from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

Vue.config.productionTip = false

// 加入到原型
Vue.use(VueAxios, axios)

Vue.component('loading', Loading)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
extend('required', {
  ...required,
  message: 'This field is required'
})
// VeeValidate.configure({
//   classes: {
//     valid: 'is-valid',
//     invalid: 'is-invalid'
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
