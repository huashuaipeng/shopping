<template>
	<div class="header">
		<div class="nav">
			<!--左标后退-->
			<span class="nav-left iconfont icon-houtui" v-if="navleft=='common'" @click="back"></span>
			<!-- 头部 -->
			<div class="header-title">{{title}}</div>
			<!--右边搜索-->
			<router-link :to="{name:'search-child',params:{id:0}}" v-if="navright=='home'" tag='span' class="nav-right iconfont icon-sousuo"></router-link>
			<router-link to="/" tag='span' class="nav-right iconfont icon-shouye" v-if="navright=='product'"></router-link>
			<!--右边订单列表文字-->
			<router-link :to="{name:'orderall'}" tag='span' class="nav-right nav-text" v-if="navright=='orderpay'">订单列表</router-link>
			<!--右边共同空白，可以不传递-->
			<span class="nav-right" v-if="navright=='common'"></span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["navleft", "navright", "title"],
		data() {
			return {

			}
		},
		methods: {
			back: function() {
				this.$router.back()
			}
		}
	}
</script>