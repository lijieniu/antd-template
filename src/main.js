import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import api from './network/api';
import '../mock/index.js';

Vue.config.productionTip = false;
Vue.use(AntDesignVue);
Vue.prototype.$axios = api;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
