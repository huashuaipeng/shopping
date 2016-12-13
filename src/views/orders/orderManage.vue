<template>
	<div class="p-size">
		<navheader :navleft="'common'" :title="'订单管理'"></navheader>
		<!--导航-->
		<div class="manager-nav p-border-b p-flex">
			<router-link class="p-flex-1 p-text-c" replace v-for="item in routersname" :to="{name:item.rname}" :active-class="'search-swiper-active'">{{item.title}}</router-link>
		</div>
		<transition name='fade' mode='out-in'>
			<router-view></router-view>
		</transition>
	</div>
</template>
<style>
	.manager-nav a {
		position: relative;
		line-height: .69rem;
		color: #3C3C3C;
		font-size: .28rem;
		display: block;
	}
</style>
<script>
	import navheader from '../../components/navheader.vue'
	export default {
		data() {
				return {
					routersname: [{
						rname: "orderall",
						title: "全部"
					}, {
						rname: "orderwaitpay",
						title: "待付款"
					}, {
						rname: "orderwaitgoods",
						title: "待收货"
					}, {
						rname: "orderwaitping",
						title: "待评价"
					}]
				}
			},
			components: {
				navheader
			}
	}
</script>