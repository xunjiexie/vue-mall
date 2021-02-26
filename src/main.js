import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem.js'
import waterfall from 'vue-waterfall2'

import { Button, Dialog, Swipe, SwipeItem, Lazyload, Loading } from 'vant'

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Loading)

Vue.use(waterfall)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
