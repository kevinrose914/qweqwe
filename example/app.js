import Vue from 'vue'
import App from './app.vue'
// import vueSticky from '../dist/vue-element-sticky.min.js'
// const { vueStickyOuter, vueStickyItem } = vueSticky
import vueStickyOuter from '../src/sticky-outer.vue'
import vueStickyItem from '../src/sticky-item.vue'

Vue.component(vueStickyOuter.name, vueStickyOuter)
Vue.component(vueStickyItem.name, vueStickyItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
