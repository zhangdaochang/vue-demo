import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.directive('y',{
  inserted:function(el,info,vnode,oldnode){
    el.addEventListener(info.arg,info.value)
  },
  unbind(el,info){
    el.removeEventListener(info.arg,info.value)
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})