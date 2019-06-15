import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './plugins/axios'

const moment = require('moment')
require('moment/locale/pt-br')
Vue.use(require('vue-moment'),{
  moment
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
