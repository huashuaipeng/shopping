<template>
	<div class="load" v-if="isshow">
		<div id="loading-absolute">
			<div class="object" id="object_one"></div>
			<div class="object" id="object_two"></div>
			<div class="object" id="object_three"></div>
			<div class="object" id="object_four"></div>
		</div>
		<p>正在加载中...</p>
	</div>
</template>
<script>
	export default {
		name: "pageload",
		props: ["isshow"]
	}
</script>
<style scoped>
	.load {
		width: 6.4rem;
		height: 11.36rem;
		background: #fff;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	
	#loading-absolute {
		position: absolute;
		left: 50%;
		top: 35%;
		height: 0.5rem;
		width: 0.5rem;
		margin-left: -0.25rem;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		-webkit-animation: loading-absolute 1.5s infinite;
		animation: loading-absolute 1.5s infinite;
	}
	
	.object {
		width: 0.25rem;
		height: 0.25rem;
		background: #ff0084;
		float: left;
	}
	
	#object_one {
		background: #8fc241;
		-webkit-animation: object_one 1.5s infinite;
		animation: object_one 1.5s infinite;
	}
	
	#object_two {
		-webkit-animation: object_two 1.5s infinite;
		animation: object_two 1.5s infinite;
	}
	
	#object_three {
		-webkit-animation: object_three 1.5s infinite;
		animation: object_three 1.5s infinite;
	}
	
	#object_four {
		background: #8fc241;
		-webkit-animation: object_four 1.5s infinite;
		animation: object_four 1.5s infinite;
	}
	
	p {
		position: absolute;
		font-size: 0.25rem;
		width: 6.4rem;
		top: 49%;
		text-align: center;
	}
	
	@keyframes loading-absolute {
		100% {
			transform: rotate(-45deg);
		}
	}
	
	@-webkit-keyframes loading-absolute {
		100% {
			-webkit-transform: rotate(-45deg);
		}
	}
	
	@keyframes object_one {
		25% {
			transform: translate(0, -0.4rem) rotate(-180deg);
		}
		100% {
			transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@-webkit-keyframes object_one {
		25% {
			-webkit-transform: translate(0, -0.4rem) rotate(-180deg);
		}
		100% {
			-webkit-transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@keyframes object_two {
		25% {
			transform: translate(0.4rem, 0) rotate(-180deg);
		}
		100% {
			transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@-webkit-keyframes object_two {
		25% {
			-webkit-transform: translate(0.4rem, 0) rotate(-180deg);
		}
		100% {
			-webkit-transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@keyframes object_three {
		25% {
			transform: translate(-0.4rem, 0) rotate(-180deg);
		}
		100% {
			transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@-webkit-keyframes object_three {
		25% {
			-webkit-transform: translate(-0.4rem, 0) rotate(-180deg);
		}
		100% {
			-webkit-transform: rtranslate(0, 0) rotate(-180deg);
		}
	}
	
	@keyframes object_four {
		25% {
			transform: translate(0, 0.4rem) rotate(-180deg);
		}
		100% {
			transform: translate(0, 0) rotate(-180deg);
		}
	}
	
	@-webkit-keyframes tobject_four {
		25% {
			-webkit-transform: translate(0, 0.4rem) rotate(-180deg);
		}
		100% {
			-webkit-transform: translate(0, 0) rotate(-180deg);
		}
	}
</style>