<template>
	<div class="order-item p-border-t">
		<div class="order-crate p-border-b">
			2016-10-1 13:22
			<span class="order-status">完成</span>
		</div>
		<div class="order-goodspic p-border-b textellipsisone" @click="enter">
			<span><img src="../assets/logo.png" /></span>
			<span><img src="../assets/logo.png" /></span>
			<span><img src="../assets/logo.png" /></span>
			<div class="order-enter">
				＞＞
			</div>
		</div>
		<div class="order-total">
			<div class="p-border-b">实付：123 </div>
			<div class="order-btns"><button class="order-btn" @click="test">去付款</button></div>
		</div>

	</div>
</template>
<script>
	export default {
		props: ["orderitem"],
		data() {
			return {

			}
		},
		methods: {
			test: function() {
				alert("child");
				this.$emit("test")
			},
			enter: function() {
				this.$router.push({
					path: "/orderdetail"
				})
				//this.$emit("enter");

			}
		}
	}
</script>
<style>
	.order-item {
		position: relative;
		margin-top: .12rem;
		background: #fff;
		font-size: .28rem;
	}
	
	.order-crate,
	.order-goodspic {
		padding: 0 .2rem;
	}
	
	.order-crate {
		position: relative;
		height: .6rem;
		line-height: .6rem;
		color: #888888;
		font-size: .22rem;
	}
	
	.order-status {
		position: absolute;
		color: #8FC241;
		right: .2rem;
		font-size: .24rem;
	}
	
	.order-goodspic {
		background-color: #F5F5F5;
		overflow-x: scroll;
		width: 6.4rem;
	}
	
	.order-goodspic span {
		width: 1.3rem;
		height: 1.3rem;
		margin: .1rem .1rem .1rem 0;
		border: 1px solid #DFDFDF;
		background: #fff;
	}
	
	.order-total {
		line-height: .6rem;
		padding: 0 .2rem;
		font-size: .26rem;
		text-align: right;
	}
	
	.order-btn {
		background: #fff;
		border: 1px solid #8FC241;
		padding: .08rem .35rem;
		border-radius: .1rem;
		margin: .1rem 0 .1rem .1rem;
		-webkit-border-radius: .1rem;
		color: #8FC241;
	}
	
	.order-btn:active {
		background: #8FC241;
		color: #fff;
	}
	
	.order-enter {
		position: absolute;
		line-height: 1.5rem;
		width: .6rem;
		right: 0;
		background: #F5F5F5;
		top: .6rem;
		color: #AAA9A9;
	}
</style>