<template>
	<div class="home-goods-list clearfix p-flex-float">
		<div v-for="item in product" class="goods">
			<router-link :to="{name:'product'}">
				<div class="goods-img p-align-justy">
					<img v-lazy="item.pic" class="p-imgloay" />
				</div>
				<div class="goods-name textellipsis">
					{{item.names}}
				</div>
				<div class="goods-oldprice">￥200</div>
				<div class="goods-newprice">￥100</div>
				<div class="goods-vip">vip专享</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			product: {
				type: Array
			}
		},
		created: function() {

		}
	}
</script>
<style>
	.home-goods-list {
		padding: 0rem .28rem .18rem .1rem;
		border-top: 1px solid #DFDFDF;
		border-bottom: 1px solid #DFDFDF;
	}
	
	.goods {
		position: relative;
		padding-left: .18rem;
		padding-top: .18rem;	
		width: 2.006666rem;
		overflow: hidden;
	}
	
	.goods-img {
		height: 2rem;
		border: 1px solid #dfdfdf;
		overflow: hidden;
		display: flex;
		align-content: center;
		justify-content: center;
	}
	
	.goods-name,
	.goods-oldprice {
		font-size: .2rem;
		margin-top: .1rem;
	}
	
	.goods-name {
		font-size: 12px;
		height: 35px;
		color: #3C3C3C;
	}
	
	.goods-oldprice {
		color: #cccbcb;
		margin-bottom: .1rem;
	}
	
	.goods-newprice {
		color: #FF3b3b;
		font-size: .24rem;
	}
	
	.goods-vip {
		position: absolute;
		background-color: #8fc241;
		left: .18rem;
		top: .18rem;
		padding-left: .05rem;
		color: #fff;
		font-size: .18rem;
		line-height: .34rem;
		height: .34rem;
		width: 1rem;
	}
	
	.goods-vip:before {
		content: "";
		position: absolute;
		right: -0.17rem;
		top: 0;
		border: .17rem solid #8FC241;
		height: .34rem;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		overflow: hidden;
		border-right-color: transparent;
	}
</style>