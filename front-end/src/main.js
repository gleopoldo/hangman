// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import WordStore from '@/components/store/WordStore'
import VueResource from 'vue-resource'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    words: WordStore,
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
