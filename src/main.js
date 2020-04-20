import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import tools from './plugins/tools.js'
import * as type from './store/type.js'
import { get, post } from './http/index.js'
import { miApi } from './api/index.js'
import 'nprogress/nprogress.css'

//webApp交互
import './plugins/miSdk.js'

Vue.config.productionTip = false;   

Vue.prototype.$tools = tools;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$type = type;
Vue.prototype.$api = miApi;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
