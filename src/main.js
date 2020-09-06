import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引用全局css
import './css/common.css'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引用axios
import axios from 'axios'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
