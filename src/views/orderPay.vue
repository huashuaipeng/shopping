<template>
	<div class="p-size">
		<navheader :navleft="'common'" :title="'订单支付'" :navright="'orderpay'"></navheader>
		<!--订单支付-->
		<div class="pay">
			<div class="pay-num">订单编号：12333444444</div>
			<div class="pay-goods p-border-b p-border-t">
				<productOrder :productOrder="ordergoods"></productOrder>
				<div>小计：￥120</div>
				<div>应付：￥120</div>
			</div>
			<div class="pay-line">共1件商品</div>
			<div class="pay-line">合计：120</div>
			<div class="pay-line p-border-b">应付：120</div>
			<button class="p-full-btn">微信支付</button>
		</div>
	</div>
</template>
<style>
	.pay {
		padding: .15rem .2rem;
	}
	
	.pay-num {
		padding-bottom: .12rem;
	}
	.pay-goods{
		padding: .1rem 0;
	}
	.pay >button{
		margin-top: 1rem;
	}
	.pay-line{
		padding: .05rem 0;
	}
</style>
<script>
	import navheader from '../components/navheader.vue'
	import productOrder from '../components/productOrder.vue'
	export default {
		data() {
			return {
				ordergoods: [1]
			}
		}, components: {
			navheader,
			productOrder
		}
	}
</script>