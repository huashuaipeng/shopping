<template>
	<div class="p-size">
		<navheader :navleft="'common'" :title="'申请退货'"></navheader>
		<div class="reject-num">
			<div class="reject-code p-padding p-border-b">订单编号：</div>
			<div class="reject-time p-padding p-border-b">下单时间：</div>
		</div>
		<!--商品-->
		<div class="reject-goods">
			<productOrder :productOrder="[]"></productOrder>
		</div>
		<!--原因-->
		<div class="reject-reson p-padding p-border-t">
			<input class="p-check" type="radio" id="zl" value="zl" v-model="picked">
			<label for="zl">质量原因</label>
			<input class="p-check" type="radio" id="fw" value="fw" v-model="picked">
			<label for="fw">服务原因</label>
			<input class="p-check" type="radio" id="oth" value="oth" v-model="picked">
			<label for="oth">其他原因</label>
		</div>
		<!--理由内容-->
		<div class="reject-conent p-padding">
			 <textarea>11</textarea>
		</div>
        <div class="p-padding reject-way">
        	<div>退货方式</div>
        	<div class="reject-select"><span class="active">送货至门店</span><span>快递至门店</span></div>
            <button class="p-full-btn">提交申请</button>
        </div>
	</div>
</template>
<style>
	.p-padding {
		padding: .1rem .2rem;
	}
	
	.reject-num {
		line-height: .62rem;
	}
	
	.reject-time {
		color: #888888;
	}
	
	.reject-goods {
		background: #F5F5F5;
		padding: .1rem .2rem;
	}
	.reject-reson{
		padding:.15rem;
		text-align: center;
		display: flex;
		justify-content:space-around;	
	}
	.reject-reson input{
		position: relative;
		top:-.03rem
	}
	.reject-conent{
		border-bottom: 10px #F5F5F5 solid;
	}
	textarea{
		border: 1px solid #DFDFDF;
		border-top-width: 2px;
		border-radius: .15rem;
		height: 1.2rem;
		width: 100%;
		padding: 2px;
		margin-top: -.1rem;
	}
	.reject-select span{
		width: 2.2rem;
		line-height: .5rem;
		border: 1px solid #F5F5F5;
		text-align: center;
		border-radius: .05rem;
		margin:.1rem .1rem .1rem 0 ;
	}
	.reject-select span.active{
		color: #8FC241;
		border-color: #8FC241;
	}
</style>

<script>
	import navheader from '../components/navheader.vue'
	import productOrder from '../components/productOrder.vue'
	export default {
		data() {
				return {
                   picked:"zl"
				}
			},
			components: {
				navheader,
				productOrder
			}
	}
</script>