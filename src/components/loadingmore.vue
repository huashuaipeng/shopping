<template>
	<div class="loadingmore">
		<div v-if="isshow"><span></span>努力加载中…</div>
		<div v-else>已经到底了</div>
	</div>
</template>
<style>
	.loadingmore {
		text-align: center;
		font-size: .22rem;
		padding: 5px 0;
		color: #8E8E8E;
	}
	
	.loadingmore div>span {
		width: .22rem;
		height: .22rem;
		border: 2px solid #8FC241;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		border-bottom-color: #DFDFDF;
		border-top-color: #DFDFDF;
		animation: infin 600ms linear infinite;
		-webkit-animation: infin 600ms linear infinite;
		margin-right: 5px;
		position: relative;
		top: 2px;
	}
	
	@-webkit-keyframes infin {
		from {
			-webkit-transform: rotateZ(0);
		}
		to {
			-webkit-transform: rotateZ(360deg);
		}
	}
	
	@keyframes infin {
		from {
			transform: rotateZ(0);
		}
		to {
			transform: rotateZ(360deg);
		}
	}
</style>
<script>
	export default {
		props: ["isshow"]
	}
</script>