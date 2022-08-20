import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.directive('y',{
  inserted(el,info,vnode,oldnode){
    console.log(el)
    console.log(info)
    console.log(vnode)
    console.log(oldnode)  
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})