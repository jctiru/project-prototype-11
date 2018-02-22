import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-6360f.firebaseio.com/';

Vue.filter('currency', (value)=>{
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
});
