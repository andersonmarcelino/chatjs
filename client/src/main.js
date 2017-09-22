import Vue from 'vue'
import VueWorker from 'vue-worker'
import App from './App'
import router from './router'
import io from 'socket.io-client'

window.socket = io('http://' + window.location.hostname  +':3001');

Vue.use(VueWorker);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
