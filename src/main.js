import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueDND from 'awe-dnd'

Vue.config.productionTip = false

Vue.use(VueDND)
Vue.use(Vuetify)

/* eslint-disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})