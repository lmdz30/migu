import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios';

require("./mock/index")
Vue.use(Vant);
Vue.config.productionTip = false
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import "./util/comLi.js"
import axios from "axios"
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
require("./mock/index.js")
>>>>>>> 9448dbb... 王
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
