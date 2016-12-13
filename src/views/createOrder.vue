<template>
	<div class="createcorder p-container">
		<navheader :navleft="'common'" :title="'创建订单'"></navheader>
		<!--快递-->
		<div class="corder-way">
			<div class="corder-way-con">
				<input class="p-check" type="radio" id="nofast" value="nofast" v-model="picked">
				<label for="nofast">自提</label>
				<input class="p-check" type="radio" id="fast" value="fast" v-model="picked">
				<label for="fast">物流</label>
			</div>
			<!--基本信息-->
			<div class="corder-fast p-flex" v-if="fastisshow">
				<div class="corder-info p-flex-1">
					<div><span>收件人</span>张新生</div>
					<div class="corder-info-tel"><span>联系电话</span>1581131232</div>
					<div class="corder-address"><span>收货地址</span>是卡卡是抗生素开始开始收看电视看</div>
				</div>
				<div class="corder-select">
					<div class="corder-change">修改地址</div>
				</div>
			</div>
		</div>
		<!--订单商品-->
		<div class="corder-list">
			<div class="carlist-item" v-for="goods in ordergoods">
				<productOrder :productOrder="goods"></productOrder>
				<div class="corder-listtotal">小计：￥12</div>
			</div>
		</div>
		<!--发票信息-->
		<div class="corder-fapiao p-flex">
			<div>发票信息</div>
			<ul class="p-flex-1">
				<li>普通发票</li>
				<li>普通发票</li>
				<li>普通发票</li>
			</ul>
			<div style="color: #AAA9A9;"> >> </div>
		</div>

		<!--合计-->
		<div class="corder-heji p-border-b p-border-t">
			<div><span>共1件商品合计：</span>￥120</div>
			<div class="p-border-b"><span>运费：</span>￥120</div>
			<div><span>订单总额：</span>￥120</div>
			<div><span>应付金额：</span>￥120</div>
		</div>
		<!--提交按钮-->
		<div class="corder-btn">
			<router-link to="/orderpay">
				<button class="p-full-btn">提交订单</button>
			</router-link>
		</div>
	</div>
</template>
<style>
	.createcorder {
		font-size: .24rem;
		background: #F5F5F5;
	}
	
	.corder-fapiao,
	.corder-list,
	.corder-way,
	.corder-heji {
		background-color: #fff;
	}
	
	.corder-way-con {
		text-align: center;
		padding: .2rem;
		border-bottom: 1px solid #DFDFDF;
	}
	
	label {
		margin-left: .1rem;
	}
	
	label[for="one"] {
		margin-right: .7rem;
	}
	
	#fast {
		margin-left: .7rem;
	}
	
	.corder-fast {
		padding: .2rem .2rem .15rem .2rem;
		border-bottom: 1px solid #DFDFDF;
	}
	
	.corder-info span {
		display: inline-block;
		width: 1.28rem;
	}
	
	.corder-address {
		line-height: .38rem;
	}
	
	.corder-info-tel {
		margin: .12rem 0;
	}
	
	.corder-select {
		width: 1.46rem;
		text-align: right;
	}
	
	.corder-change {
		color: #8FC241;
	}
	
	.carlist-item:last-child {
		margin-bottom: 0;
	}
	
	.corder-listtotal {
		padding: .08rem 0 0 .08rem;
	}
	
	.corder-fapiao {
		height: 1.4rem;
		padding: 0 .2rem;
		border-top: 1px solid #DFDFDF;
		border-bottom: 1px solid #DFDFDF;
	}
	
	.corder-fapiao> div {
		line-height: 1.4rem;
	}
	
	.corder-fapiao> div:first-child {
		width: 2rem;
	}
	
	.corder-fapiao>ul li {
		font-size: .22rem;
		line-height: .4666666rem;
	}
	
	.corder-heji {
		padding: .1rem .2rem;
		line-height: .45rem;
		margin-top: .12rem;
	}
	
	.corder-heji>div span {
		width: 2rem;
	}
	
	.corder-btn {
		padding: .1rem .2rem;
	}
</style>
<script>
	import navheader from '../components/navheader.vue'
	import productOrder from '../components/productOrder.vue'
	export default {
		data() {
				return {
					picked: "nofast",
					ordergoods: [1, 2]
				}
			},
			computed: {
				fastisshow: function() {
					if(this.picked == "fast") {
						return true
					}
				}
			},
			components: {
				navheader,
				productOrder
			}
	}
</script>