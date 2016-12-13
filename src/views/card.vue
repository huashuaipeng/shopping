<template>
	<div class="card">
		<navheader :navleft="'common'" :title="'卡卷包'"></navheader>	
		<div class="card-img p-rel">
			<div class="card-big p-abs">
				<img class="card-big-img" src="../assets/images/card.png" alt="卡卷包" />
			</div>
			<p class="card-shop p-abs">赛特购物中心</p>
			<p class="card-vip p-abs">VIP金卡</p>
			<p class="card-jif p-abs">
				<span>当前积分</span>
				<span> : </span>
				<span>10030</span>
			</p>
			<hr class="card-hr p-abs">
			<img class="card-qr p-abs" src="../assets/images/fk.png" alt="二维码" />
			<div class="card-date p-abs">2016.02.11-2016.03.11</div>
		</div>
	</div>
</template>
<script>
	import navheader from '../components/navheader.vue'
	export default {
		data(){
			return {}
		},
		components: {
			navheader
		},

	}
</script>
<style>
	.card {
		width: 6.4rem;
		font-size: .3rem;
		color: #fc7945;
	}
	.card-img {
		margin: .2rem .2rem 0 .2rem;
		width: 6rem;
		height: 2.4rem;
	}
	.card-big {
		left: 0;
		top: 0;
		width: 6rem;
		height: 2.4rem;
	}
	.card-big-img {
		width: 100%;
		height: 100%;
	}
	.card-shop {
		top: .58rem;
		left: 2.1rem;
	}
	.card-vip {
		font-size: .22rem;
		top: 1.08rem;
		left: 2.4rem;
	}
	.card-jif {
		font-size: .2rem;
		top: 1.46rem;
		left: 2rem;
	}
	.card-hr {
		width: 5.6rem;
		margin: 0 .2rem;
		border: 1px dashed #fec0a8;
		bottom: .5rem;	
	}
	.card-qr {
		width: .4rem;
		height: .4rem;
		left: .42rem;
		bottom: .05rem;
	}
	.card-date {
		width: 3rem;
		right: .2rem;
		bottom: .12rem;
		font-size: .2rem;
		text-align: right;
	}
</style>