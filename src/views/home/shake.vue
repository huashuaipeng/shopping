<template>
	<div class="shake">
		<navheader :navleft="'common'" :title="'摇一摇'"></navheader>
		<div class="shake-content p-rel">
			<img class="shake-imgshake p-abs" src="../../assets/images/shack.png" alt="摇一摇" />
			<img class="shake-imglog p-abs" src="../../assets/images/ylogo.png" alt="logo" />
		</div>
	</div>
</template>
<script>
	import navheader from '../../components/navheader.vue'
	export default {
		components: {
			navheader
		}
	}
</script>
<style>
	.shake {
		width: 6.4rem;
	}
	
	.shake-content {
		width: 100%;
		height: 8.64rem;
	}
	
	.shake-imgshake {
		left: 50%;
		top: 1.34rem;
		width: 4.13rem;
		height: 4.21rem;
		margin-left: -2.06rem;
	}
	
	.shake-imglog {
		left: 50%;
		top: 7.2rem;
		width: 2.23rem;
		height: .69rem;
		margin-left: -1.11rem;
	}
</style>