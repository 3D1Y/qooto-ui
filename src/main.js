import Vue from 'vue'
import App from './App.vue'
import QtButton from './components/Button'
import QtDialog from './components/Dialog'
import './assets/iconfont.css'

Vue.config.productionTip = false

Vue.component(QtButton.name, QtButton)
Vue.component(QtDialog.name, QtDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
