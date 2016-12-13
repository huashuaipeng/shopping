<template>
	<div class="container p-size" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<div class="header">
			<div class="nav">
				<span class="nav-left iconfont icon-houtui" @click="back">  </span>
				<h1 class="header-title"><input class="search-input" type="text"></h1>
				<span class="nav-right iconfont icon-search"></span>
			</div>
		</div>
		<!--筛选条件-->
		<div class="search-if p-flex">
			<div class="p-flex-1">默认</div>
			<div class="p-flex-1">最新</div>
			<div class="p-flex-1">销量</div>
			<div class="p-flex-1 search-price">价格</div>
			<div class="p-flex-1" @click="changeM">筛选</div>
		</div>
		<!--筛选结果-->
		<div>
			<cgoods :product="goodslist"></cgoods>
		</div>
		<!--弹出-->
		<div class="search-mask" v-if="showfilter"></div>
		<div class="search-m-f" v-if="showfilter">
			<div class="search-filter p-border-t">
				<div style="height: 3.1rem; overflow-y: scroll;">
					<div class="p-border-b">
						<span>价格范围</span><input type="number" /><span class="search-s">---</span><input type="number" />
					</div>
					<div class="p-border-b">
						<span>商户名称</span><input type="text" />
					</div>
					<div class="search-pinpai">
						<div class="search-filter-t">商品品牌</div>
						<span>阿迪达斯</span><span>阿迪达斯</span><span>阿迪达斯</span><span>阿迪达斯</span><span>阿迪达斯</span><span>阿迪达斯</span>
					</div>
				</div>
				<button class="p-full-btn" @click="changeM">确定</button>
			</div>
		</div>
	</div>
</template>
<style>
	.search-input {
		position: relative;
		top: -.04rem;
		border-radius: 10px;
		line-height: .55rem;
		width: 95%;
		padding: 0 5px;
	}
	
	.search-if {
		line-height: .7rem;
		height: .7rem;
		font-size: .24rem;
		padding: 0 .2rem;
		text-align: center;
	}
	
	.search-price {
		position: relative;
	}
	
	.search-price:before,
	.search-price:after {
		border: .06rem solid transparent;
		content: "";
		display: inline-block;
		position: absolute;
		right: .2rem;
	}
	
	.search-price:before {
		border-bottom-color: #888888;
		top: .2rem;
	}
	
	.search-price:after {
		border-top-color: #888888;
		bottom: .2rem;
	}
	
	.search-filter {
		padding: 0 .2rem;
	}
	
	.search-filter>div {
		height: .86rem;
	}
	
	.search-filter span {
		width: 1.16rem;
	}
	
	.search-filter input {
		height: .46rem;
		background: #F5F5F5;
		margin: .2rem 0;
		padding: 0 10px;
	}
	
	.search-filter input[type=number] {
		width: 2.1rem;
	}
	
	span.search-s {
		width: .64rem;
		text-align: center;
	}
	
	.search-filter input[type=text] {
		width: 4.84rem;
	}
	
	.search-filter-t {
		padding: .2rem 0;
	}
	
	.search-pinpai span {
		padding: .1rem .3rem;
		background: #F5F5F5;
		margin-right: .1rem;
		margin-bottom: .1rem;
		border-radius: .5rem;
		-webkit-border-radius: .5rem;
	}
	
	.search-mask {
		position: fixed;
		left: 0;
		right: 0;
		top: 1.48rem;
		bottom: 0;
		z-index: 5;
		background: rgba(0, 0, 0, .1);
	}
	
	.search-m-f {
		position: fixed;
		width: 6.4rem;
		margin: 0 auto;
		z-index: 6;
		top: 1.48rem;
		background: #FFFFFF;
	}
</style>
<script>
	import navheader from '../components/navheader.vue'
	import cgoods from '../components/goods.vue'
	var vm = {
		data() {
			return {
				showfilter:false,
				indexnum: 0,
				goodslist: ["全部", "潮流前线", "男包装", "女大衣", "男裤子"]
			}
		},
		components: {
			navheader,
			cgoods
		},
		methods: {
			back: function() {
				this.$router.go(-1)
			},
			loadMore: function() {

			},
			test: function() {
				console.dir(vm.data)
			},
			searchchange: function(num) {
				console.log(num)
			},
			changeM(){
				this.showfilter=!this.showfilter;
			}
		}
	}
	export default vm;
</script>