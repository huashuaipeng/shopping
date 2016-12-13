import Vue from 'vue'
import vueResource from "vue-resource"

import util from './util.js'
import router from './router.js'

import AwesomeSwiper from 'vue-awesome-swiper'
import {InfiniteScroll,Lazyload} from 'mint-ui'

import Pageload from './components/pageload.vue'
import './assets/app.css'

//引入插件
Vue.use(Lazyload, {
		preLoad: 1.3,
		attempt: 1
	}) //延迟加载 需要进一步处理
Vue.use(AwesomeSwiper) //轮播
Vue.use(InfiniteScroll) //无限滚动
Vue.use(vueResource) //ajax插件
Vue.component(Pageload.name, Pageload)

window.util = util;

new Vue({
	el: '#app',
	router,
	template: "<transition name='fade' mode='out-in'><router-view></router-view></transition>"
})