import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import AsyncComputed from 'vue-async-computed'

import './main.styl'
import App from './App'
import { router } from './routes'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(AsyncComputed)

Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:5000/'
Vue.http.options.credentials = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
