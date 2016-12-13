import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const router = new vueRouter({
	routes: [{
		path: "/",
		name: "homeMain",
		component: () => System.import('./views/home/homeMain.vue'),
		redirect: '/home',
		children: [{
			path: "/home",
			name: "home",
			component: () => System.import('./views/home/home.vue')
		}, {
			path: "/classify",
			name: "classify",
			component: () => System.import('./views/home/classify.vue')
		}, {
			//购物车
			path: "/hbuycar",
			name: "homebuycar",
			component: () => System.import('./views/buyCar.vue')
		}, {
			path: '/personal', //个人中心
			name: "personal",
			component: () => System.import('./views/home/personal.vue')
		},{
			path: '/shake', //摇一摇
			name: "shake",
			component: () => System.import('./views/home/shake.vue')
		}]
	}, {
		//搜索页面
		path: "/search",
		name: "search",
		component: () => System.import('./views/search.vue'),
		children: [{
			path: ":id",
			name: "search-child",
			component: () => System.import('./components/search-result.vue')
		}]
	}, {
		//商品详情
		path: "/product",
		name: "product",
		component: () => System.import('./views/productDetail.vue')
	}, {
		//购物车
		path: "/buycar",
		name: "buycar",
		component: () => System.import('./views/buyCar.vue')
	}, {
		path: "/createOrder", //创建订单
		name: "createOrder",
		component: () => System.import('./views/createOrder.vue')
	}, {
		path: "/orderpay", //订单支付
		name: "orderpay",
		component: () => System.import('./views/orderPay.vue')
	}, {
		path: "/ordermanage", //订单管理
		name: "ordermanage",
		component: () => System.import('./views/orders/orderManage.vue'),
		children: [{
			path: "orderall", //全部订单
			name: "orderall",
			component: () => System.import('./views/orders/orderAll.vue'),
		}, {
			path: "orderwaitgoods", //待收货
			name: "orderwaitgoods",
			component: () => System.import('./views/orders/orderWaitgoods.vue'),
		}, {
			path: "orderwaitpay", //待支付
			name: "orderwaitpay",
			component: () => System.import('./views/orders/orderWaitpay.vue'),
		}, {
			path: "orderwaitping", //待评价
			name: "orderwaitping",
			component: () => System.import('./views/orders/orderWaitping.vue'),
		}]
	}, {
		path: "/orderdetail", //订单详情
		component: () => System.import('./views/orders/orderDetail.vue'),
	}, {
		path: "/goodsRejected", //退货
		component: () => System.import('./views/goodsRejected.vue'),
	}, {
		path: '/card', //购物券
		component: () => System.import('./views/card.vue')
	}, {
		path: '/addresslist', //地址列表
		component: () => System.import('./views/addressList.vue')
	}, {
		path: '/addressEditor', //地址编辑
		component: () => System.import('./views/addressEditor.vue')
	}]
})
router.beforeEach((to, from, next) => {
	document.documentElement.scrollTop = document.body.scrollTop = 0;
	next()
})
export default router