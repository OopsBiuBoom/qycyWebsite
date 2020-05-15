import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import pubsubJs from "pubsub-js"

// 导入ElementUI
Vue.use(ElementUI)
Vue.use(pubsubJs)

// 生产环境设置
Vue.config.productionTip = (process.env.NODE_ENV === 'produciton');

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
