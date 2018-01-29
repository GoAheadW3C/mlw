
import Vue from 'vue'
import VueCookie from 'vue-cookie'

let locale = VueCookie.get('locale') || 'zh_cn';
let i18n= require(`../../i18n/${locale}/${locale}_type`);



let wlm_i18n = {};
wlm_i18n.install = function (Vue, options) {
  Vue.prototype.i18n = i18n.default;
}

export default wlm_i18n;