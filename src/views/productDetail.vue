<template>
	<div class="product">
		<!--导航-->
		<navheader :navleft="'common'" :title="'商品详情'" :navright="'product'"></navheader>
		<!-- 轮播banner -->
		<swiper :options="swiperbanner" class="product-swipe">
			<swiper-slide class="product-swipe-item" v-for="ppic in productpics"><img :src="ppic" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!--商品介绍-->
		<div class="product-container">
			<div class="product-name">2016年新款大衣，流行上市皮质有保证。赶紧来买吧</div>
			<div class="product-price">
				<span class="product-newprice">
		    		￥120.0
		    	</span>
				<span class="product-oldprice">
		    		￥120.0
		    	</span>
			</div>
			<div class="product-note">此商品不参加</div>
		</div>
		<!--参数-->
		<div class="product-container product-select" @click="meau()">
			<span class="product-title">选择参数</span> <span class="product-tan"> >> </span>
		</div>
		<!--商品介绍-->
		<div class="product-container">
			<div class="product-title">图文详情</div>
		</div>
		<!--弹出-->
		<div class="product-mask" v-bind:class="[maskactive ? 'product-mask-active':'']">
			<div class="mask-con">
				<div class="product-mask-con p-flex">
					<div class="mask-con-title">数量:</div>
					<div class="make-con-rigth p-flex-1">
						<button class="p-btnjian">-</button><input class="p-input" type="text" value="1" /><button class="p-btnjia">+</button>
					</div>
				</div>
				<div class="product-mask-canshu">
					<div v-if="colors.length>0" class="product-mask-con p-flex">
						<div class="mask-con-title">颜色:</div>
						<div class="make-con-rigth p-flex-1" @click="changecolor">
							<span v-for="(item,index) in colors" :data-id="index" :class="[index==colorId?'mask-span-active':'']">{{item}}</span>
						</div>
					</div>
					<div v-if="sizes.length>0" class="product-mask-con p-flex">
						<div class="mask-con-title">尺码:</div>
						<div class="make-con-rigth p-flex-1" @click="changesize">
							<span v-for="(item,index) in sizes" :data-id="index" :class="[index==sizeId?'mask-span-active':'']">{{item}}</span>
						</div>
					</div>
					<div class="product-mask-con p-flex">
						<div class="mask-con-title">颜色:</div>
						<div class="make-con-rigth p-flex-1">
							<span class="mask-span-active">红色</span><span>红色</span><span>红色</span><span>红色</span>
						</div>
					</div>
					<div class="product-mask-con p-flex">
						<div class="mask-con-title">颜色:</div>
						<div class="make-con-rigth p-flex-1">
							<span class="mask-span-active">红色</span><span>红色</span><span>红色</span><span>红色</span>
						</div>
					</div>
					<button class="p-full-btn">
						确定
					</button>
				</div>
				<div class="mask-close" @click="meau()">×</div>
			</div>
		</div>
		<!---购物-->
		<div class="p-bottom-btns  product-btns">
			<div class="p-flex p-btn-width">
				<router-link to="/buycar" class="product-btncar p-flex-1 iconfont icon-gouwuche" tag="div">

				</router-link>
				<div class="product-btnjiacar">
					加入购物车
				</div>
				<div class="product-once">
					立即购买
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import navheader from '../components/navheader.vue'
	export default {
		data() {
				return {
					productpics: ["https://img.alicdn.com/imgextra/i2/134363478/TB2mHIUb89J.eBjy0FoXXXyvpXa_!!134363478.jpg_430x430q90.jpg", "https://img.alicdn.com/imgextra/i2/134363478/TB2ZIZ3bp6AQeBjSZFIXXctXpXa_!!134363478.jpg_430x430q90.jpg"],
					swiperbanner: {
						autoplay: 3500,
						pagination: '.swiper-pagination',
						paginationClickable: true,
						loop: true,
						observeParents: true,
					},
					maskactive: false,
					colors: ["红色", "黄色", "蓝色", "橘黄色"],
					colorId: 0,
					sizes: ["12", "13", "14", "15"],
					sizeId: 0
				}
			},
			methods: {
				meau: function() {
					this.maskactive = !this.maskactive
				},
				changecolor: function(event) {
					if(event.target.tagName == 'SPAN') {
						this.colorId = event.target.getAttribute("data-id")
					}
				},
				changesize: function(event) {
					if(event.target.tagName == 'SPAN') {
						this.sizeId = event.target.getAttribute("data-id")
					}
				}
			},
			components: {
				navheader
			}
	}
</script>
<style>
	.product {
		background-color: #F5F5F5;
		margin-bottom: .98rem;
	}
	
	.product-swipe {
		height: 5.12rem;
	}
	
	.product-swipe-item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.product-swipe-item img {
		width: 100%;
	}
	
	.product-container {
		padding: .2rem;
		letter-spacing: 1px;
		border-bottom: 1px solid #DFDFDF;
		margin-bottom: .2rem;
		background-color: #fff;
	}
	
	.product-name {
		font-size: .22rem;
		color: #3C3C3C;
		line-height: .35rem;
	}
	
	.product-price {
		position: relative;
		margin: .22rem 0;
		height: .3rem;
		font-size: .3rem;
	}
	
	.product-newprice {
		color: #FF3B3B;
	}
	
	.product-oldprice {
		position: absolute;
		right: 0;
		color: #aaa9a9;
		text-decoration: line-through;
		font-size: .24rem;
	}
	
	.product-note {
		font-size: .2rem;
		color: #aaa9a9;
	}
	
	.product-select {
		position: relative;
		border-top: 1px solid #DFDFDF;
		font-size: .24rem;
	}
	
	.product-title {
		color: #3C3C3C;
		font-size: .24rem;
	}
	
	.product-select .product-tan {
		position: absolute;
		right: .2rem;
	}
	
	.product-btncar {
		text-align: center;
	}
	
	.product-btncar.icon-gouwuche:before {
		display: inline-block;
		color: #8E8E8E;
		width: 1rem;
		line-height: .6rem;
		background-color: #F5F5F5;
	}
	
	.product-btnjiacar,
	.product-once {
		width: 2.38rem;
		text-align: center;
		color: #fff;
		background-color: #8FC241;
	}
	
	.product-btnjiacar {
		background-color: #ff8400;
	}
	/*弹出*/
	
	.product-mask.product-mask-active {
		transform: translateY(0%);
		opacity: 1;
	}
	
	.product-mask {
		position: fixed;
		z-index: 4;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		transition: all .2s ease;
		opacity: 0;
		transform: translateY(100%);
		background-color: rgba(140, 140, 140, .55);
	}
	
	.mask-con {
		position: absolute;
		left: 50%;
		margin-left: -3.2rem;
		bottom: 0;
		width: 6.4rem;
		height: 5.4rem;
		font-size: .24rem;
		background: #DFDFDF;
	}
	
	.product-mask-con {
		padding: .3rem .2rem;
		background: #fff;
		margin-bottom: .1rem;
	}
	
	.mask-con-title {
		padding-right: .2rem;
		padding-top: .14rem;
	}
	
	.make-con-rigth span {
		display: inline-block;
		padding: .1rem .34rem;
		font-size: .22rem;
		margin: .05rem;
		text-align: center;
		border: 1px solid #F5F5F5;
	}
	
	.make-con-rigth span.mask-span-active {
		border-color: #8FC241;
		color: #8FC241;
		position: relative;
	}
	
	.make-con-rigth span.mask-span-active:after {
		position: absolute;
		content: " ";
		font-size: .22rem;
		border: .08rem solid transparent;
		border-bottom-color: #8FC241;
		border-right-color: #8FC241;
		right: 0;
		bottom: 0;
	}
	
	.product-mask-canshu {
		height: 4.2375rem;
		overflow-y: scroll;
		padding-bottom: .2rem;
	}
	
	.mask-close {
		position: absolute;
		top: -.33rem;
		right: .15rem;
		font-size: .35rem;
		width: .66rem;
		height: .66rem;
		border-radius: 50%;
		background: #fff;
		line-height: .66rem;
		border: 1px solid #F5F5F5;
		text-align: center;
	}
</style>