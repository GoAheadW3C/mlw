// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import wlm_i18n from './plugin/i18n'

Vue.config.productionTip = false;

Vue.use(VueCookie);
Vue.use(wlm_i18n);
/* eslint-disable no-new */
var n = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
