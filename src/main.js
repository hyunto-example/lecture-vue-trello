import Vue from 'vue'
import router from './router'

// Config
Vue.config.productionTip = false

 
new Vue({
  router,
  render: h => h({ template: '<router-view></router-view>' })  
}).$mount('#app')
