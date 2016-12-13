<template>
	<div class="p-size p-bg">
		<navheader :navleft="'common'" :title="'订单详情'"></navheader>
		<!--订单自提 ,物流信息-->
		<div class="order-fast">
			<div class="order-state p-flex p-border-b ">
				<i class="iconfont">&#xe605;</i>
				<span class="order-span-title">交易状态</span>
				<span style="color: #8FC241;">代发货</span>
			</div>
			<div class="order-fastinfo p-flex p-border-b">
				<i class="iconfont">&#xe64d;</i>
				<div class="order-fastinfo-c p-flex-1">
					<div class="p-flex">
						<span>配送方式</span>
						<div class="p-flex-1">物流</div> 顺丰
					</div>
					<div>
						<span>联系方式</span>物流
					</div>
					<div>
						<span>收货地址</span>物流收货地址物流收货地址物流收货地址
					</div>
				</div>
			</div>
		</div>
		<!--订单产品列表-->
		<div class="order-d-list">
			<div class="carlist-item" v-for="item in [1,2]">
				<productOrder :productOrder="item"></productOrder>
			</div>
		</div>
		<!--合计-->
		<div class="order-d-total order-padding p-border-b">
			<div><span>1件商品合计：</span>￥120</div>
			<div><span>运费：</span>￥120</div>
			<div class="p-border-b"><span>折扣：</span>￥120</div>
			<div class="order-d-all"><span>订单总额：</span>￥120</div>
		</div>
		<div style="text-align: right;padding: 0 .2rem;background: #fff;" class="p-border-b"><button class="order-btn">支付</button></div>
		<!--发票信息-->
		<div class="order-d-fapiao order-padding p-flex ">
			<div>发票信息</div>
			<ul class="p-flex-1">
				<li>电子信息</li>
				<li>电子信息</li>
				<li>电子信息</li>
			</ul>
		</div>
		<div class="order-meb">
			<div><span>编号：</span>1233334</div>
		</div>
	</div>
</template>
<style>
	.p-bg {
		background: #F5F5F5;
	}
	.order-d-list{
		background: #FFFFFF;
	}
	.order-state,
	.order-fastinfo,
	.order-padding,
	.order-meb {
		padding: .1rem .2rem;
		background: #fff;
	}
	
	.order-fast i {
		margin-right: .2rem;
	}
	
	.order-span-title,
	.order-fastinfo-c>div>span {
		width: 1rem;
		margin: 0 .2rem 0 0;
	}
	
	.order-state span {
		font-size: .22rem;
	}
	
	.order-fastinfo {
		font-size: .24rem;
	}
	
	.order-fastinfo-c>div {
		line-height: .4rem;
	}
	
	.order-dlist {
		background: #F5F5F5;
	}
	
	.order-d-total span {
		width: 2rem;
		font-size: .2rem;
	}
	
	.order-d-total .order-d-all>span {
		font-size: .28rem;
		line-height: .5rem;
	}
	
	.order-d-fapiao {
		border-bottom: 1px solid #DFDFDF;
		border-top: 1px solid #DFDFDF;
		margin: .12rem 0;
	}
	
	.order-meb,
	.order-d-fapiao>div {
		color: #858585;
	}
	
	.order-d-fapiao>div {
		line-height: 1.22rem;
	}
	
	.order-d-fapiao ul {
		text-align: right;
		line-height: .4rem;
		font-size: .2rem;
	}
</style>
<script>
	import navheader from '../../components/navheader.vue'
	import productOrder from '../../components/productOrder.vue'
	export default {
		data() {
				return {}
			},
			components: {
				navheader,
				productOrder
			}
	}
</script>