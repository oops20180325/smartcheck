import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import rawDisplayer from "./components/raw-displayer.vue";
Vue.component("rawDisplayer", rawDisplayer);
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

import vd from 'vue-vd'
Vue.use(vd,"otherOP");
import '@/common/routerConfig/permission'
import '@/common/style/index.scss'


import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
