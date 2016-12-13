<template>
	<div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<div class="header">
			<div class="nav">
				<span class="nav-left iconfont icon-houtui" @click="back" >  </span>
				<h1 class="header-title"><input class="search-input" type="text"></h1>
				<span class="nav-right iconfont icon-sousuo"></span>
			</div>
		</div>
		<swiper :options="swiperOption" class="search-swiper">
			<router-link class="swiper-slide"  replace  v-for="(item,index) in typelist" :to="{name:'search-child',params:{id:index}}" :active-class="'search-swiper-active'">
				{{item}}
			</router-link>
		</swiper>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<style>
	.search-input {
		position: relative;
		top:-.04rem;
		border-radius: 10px;
		line-height: .55rem;
		width: 95%;
		padding: 0 5px;
	}
	
	.search-swiper {
		line-height: .69rem;
		font-size: .24rem;
		border-bottom: 2px solid #F5F5F5;
	}
	
	.search-swiper .swiper-slide {
		position: relative;
		width: 1.5rem;
		text-align: center;
		color: #3C3C3C;
	}

</style>
<script>
	import navheader from '../components/navheader.vue'
	var vm = {
		data() {
			return {
				swiperOption: {
					slidesPerView: 'auto',
					spaceBetween: 0
				},
				indexnum: 0,
				typelist: ["全部", "潮流前线", "男包装", "女大衣", "男裤子"]
			}
		},
		components: {
			navheader
		},
		methods: {
			back:function(){
				this.$router.go(-1)
			},
			loadMore: function() {

			},
			test: function() {
				console.dir(vm.data)
			},
			searchchange: function(num) {
				console.log(num)
			}
		}
	}
	export default vm;
</script>