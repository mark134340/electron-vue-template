import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js' 

Vue.config.productionTip = false

//UI组件库
// font-awesome
import './assets/font-awesome-4.7.0/scss/font-awesome.scss'; 
//ElementUI
import './plugins/element.js'

//引入自定义的svg-icon组件
import '@/assets/svg-icons/UI-icons'


//路由tab
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'
Vue.use(RouterTab)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
