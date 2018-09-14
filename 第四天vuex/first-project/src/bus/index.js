import Vue from 'vue'

const bus = new Vue()
// bus的封装
export default {
  install (Vue){
    Vue.prototype.$bus = bus
  }
}













