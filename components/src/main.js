import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import  MintUI  from  'mint-ui';

import 'element-ui/lib/theme-chalk/index.css';
import  'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
