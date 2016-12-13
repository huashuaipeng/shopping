<template>
	<div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
		<!-- 头部 -->
		<div class="header">
			<router-link class="nav" to="/search">
				<div class="header-input"><span class="iconfont icon-search header-shousuo"></span></div>
			</router-link>
		</div>
		<!-- 轮播banner -->
		<swiper :options="swiperbanner" class="banner-swipe">
			<swiper-slide class="banner-swipe-item" v-for="banner in banners"><img :src="banner" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!--头条内容-->
		<div class="home-msg">
			<swiper :options="swipertitle" class="title-swipe">
				<swiper-slide class="title-swipe-item" v-for="title in titles"><span>爆</span>{{title}}</swiper-slide>
			</swiper>
			<div class="home-first">头条：</div>
		</div>
		<!--广告-->
		<div class="home-ad p-align-justy">
			<img class="p-imgloay" v-lazy="adpic" />
		</div>

		<!--每日推荐-->
		<div class="home-goods">
			<div class="home-goods-title">每日推荐</div>
			<cgoods :product="goodslist"></cgoods>
		</div>
		<!--精选商品-->
		<div class="home-goods">
			<div class="home-goods-title">精选商品</div>
			<!--<div class="home-goods-list clearfix">
				<cgoods v-for="item in goodslist" :product="item"></cgoods>
			</div>-->
			<cgoods :product="goodslist"></cgoods>
		</div>
		<loadingmore :isshow="loading"></loadingmore>
		<pageload :isshow="pageload"></pageload>
	</div>
</template>

<script>
	import cgoods from '../../components/goods.vue'
	import loadingmore from '../../components/loadingmore.vue'
	export default {
		data() {
				return {
					banners: ["https://img.alicdn.com/imgextra/i2/20/TB2LHPcdA1M.eBjSZFFXXc3vVXa_!!20-0-yamato.jpg_2200x2200q30s0.jpg", "https://img.alicdn.com/bao/uploaded/TB1o3gtOXXXXXbOapXXSutbFXXX.jpg_1152x1920q30s0.jpg"],
					swiperbanner: {
						autoplay: 3500,
						pagination: '.swiper-pagination',
						paginationClickable: true,
						loop: true,
						observeParents: true,
					},
					titles: ["新加商品", "商品打折", "最新商品"],
					swipertitle: {
						direction: 'vertical',
						loop: true,
						autoplay: 5000,
					},
					adpic: 'https://img.alicdn.com/imgextra/i3/99/TB2e.QJdp5N.eBjSZFvXXbvMFXa_!!99-0-yamato.jpg_1152x1920q30s0.jpg',
					goodslist: [{
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					}, {
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					}, {
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					}],
					loading: false,
					pageload: false
				}
			},
			components: {
				cgoods,
				loadingmore
			},
			created: function() {
				//this.test();

			},
			methods: {
				test: function() {
					let self = this;
					self.$http.post(util.getUrl() + "users/login", {
						username: "hsp",
						pwd: 123
					}).then(response => {
						console.log("test1")
						this.test2()
						this.adpic = "https://img.alicdn.com/imgextra/i3/99/TB2e.QJdp5N.eBjSZFvXXbvMFXa_!!99-0-yamato.jpg_1152x1920q30s0.jpg"
						this.goodslist = [{
							names: "三脚架上骄傲是计算机",
							price: 123,
							pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
						}, {
							names: "骄傲是计算机",
							price: 123,
							pic: "https://img.alicdn.com/imgextra/i3/99/TB2e.QJdp5N.eBjSZFvXXbvMFXa_!!99-0-yamato.jpg_1152x1920q30s0.jpg"
						}, {
							names: "三脚架上骄傲是计算机",
							price: 123,
							pic: "https://img.alicdn.com/imgextra/i3/99/TB2e.QJdp5N.eBjSZFvXXbvMFXa_!!99-0-yamato.jpg_1152x1920q30s0.jpg"
						}, {
							names: "骄傲是计算机",
							price: 123,
							pic: "http://m.360buyimg.com/n12/jfs/t2077/300/1385395884/208954/d99a0c61/5657f9c7Nde346a09.jpg!q70.jpg"
						}];
						this.goodslist = this.goodslist.concat(this.goodslist)
						this.titles = [1, 2, 3, 4, 5]
					}, err => {
						console.log(err)
					})
				},
				test2: function() {
					this.$http.post(util.getUrl() + "users/login", {
						username: "hsp",
						pwd: 123
					}).then(response => {
						this.pageload = false
						console.log("test2")
					}, err => {
						console.log(err)
					})
				},
				loadMore: function() {
					this.loading = true;
					setTimeout(() => {
						this.goodslist.push({
							names: "三脚架上骄傲是计算机",
							price: 123,
							pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
						})
						this.loading = false
					}, 1000)
				}
			}
	}
</script>

<style>
	.banner-swipe {
		height: 2.6rem;
	}
	.container{
		height: 10.42rem;
		overflow-y: scroll;
	}
	.banner-swipe-item {
		height: 100%;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}
	
	.banner-swipe-item img {
		width: 100%;
	}
	
	.swiper-pagination-bullet {
		width: 5px;
		height: 5px;
	}
	
	.swiper-pagination-bullet-active {
		background-color: #8FC241;
	}
	
	.home-msg,
	.title-swipe {
		position: relative;
		padding-left: 1.26rem;
		height: .6rem;
		line-height: .6rem;
		color: #3c3c3c;
		font-size: .25rem;
	}
	
	.title-swipe {
		padding-left: 0;
	}
	
	.title-swipe .title-swipe-item>span {
		margin-right: .16rem;
		border: 1px solid #ff5364;
		border-radius: 50%;
		height: .33rem;
		line-height: .33rem;
		width: .33rem;
		text-align: center;
		color: #ff5364;
	}
	
	.home-first {
		position: absolute;
		left: .28rem;
		font-family: "微软雅黑";
		top: 0;
		font-size: .32rem;
		color: #ff5364;
		font-weight: bold;
	}
	
	.home-ad {
		width: 6.4rem;
		/*height: 1.6rem;*/
		height: 2.4rem;
		overflow: hidden;
		vertical-align: bottom;
	}
	
	.home-goods-title {
		line-height: .62rem;
		font-size: .24rem;
		color: #3C3C3C;
		background-color: #f5f5f5;
		text-align: center;
	}
</style>