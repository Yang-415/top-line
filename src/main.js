import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// REM适配：动态设置html标签字体大小
import 'amfe-flexible'

import './untils/register-vant'
import './styles/index.less'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
