import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap-icons/font/bootstrap-icons.css"

Vue.config.productionTip = false
Vue.prototype.$ = $

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
