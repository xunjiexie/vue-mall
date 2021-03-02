import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@/utils/rem.js'
import waterfall from 'vue-waterfall2'

import { Button, Toast, Swipe, SwipeItem, Lazyload, Loading, Field, Icon } from 'vant'

Vue.use(Button)
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Field)
Vue.use(Icon)

Vue.use(waterfall)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
