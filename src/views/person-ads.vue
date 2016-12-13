<template>
	<div class="personal-ads p-top">
		<div class="header">
			<div class="nav">
				<span class="nav-left iconfont icon-houtui" @click="back"></span>
				<div class="header-title">我的地址</div>
				<span class="nav-right" @click="add"> + </span>
			</div>
		</div>
		<div class="ads-main">
			<ul>
				<li class="p-border p-rel" v-for="use in users">
					<span class="p-block"> {{use.name}} </span>
					<span class="p-block"> {{use.phone}} </span>
					<span class="p-block"> {{use.address}} </span>
					<img src="../assets/images/xg.png" @click='edit' alt="编辑地址">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					title: '新增地址',
					users: [{
						"name": "张先生",
						"phone": "135**8345",
						"address": "北京市西城区新街口外大街22号"
					}, {
						"name": "张小三",
						"phone": "135**8345",
						"address": "贵阳市东城区新街口外大街22号"
					}]
				}
			},
			methods: {
				back() {
					this.$router.back()
				},
				edit() {
					this.$router.push({
						path: '/addressEditor',
						query: {
							title: "编辑地址",
							del: true
						}
					});

				},
				add() {
					this.$router.push({
						path: '/addressEditor',
						query: {
							title: "新增地址",
							del: false
						}
					});
				}
			}
	}
</script>
<style scoped>
	.ads-main {
		font-size: 0.24rem;
		color: #3c3c3c;
	}
	
	ul,
	.add-address {
		margin: 0.2rem 0.2rem 0 0.2rem;
	}
	
	ul li {
		width: 6rem;
		height: 1.5rem;
		border: 1px solid #dfdfdf;
		padding-left: 0.2rem;
		margin-bottom: 0.2rem;
	}
	
	li.ads-t {
		margin-top: 0.2rem;
	}
	
	li span {
		height: 0.5rem;
		line-height: 0.5rem;
	}
	
	li img {
		position: absolute;
		right: 0.2rem;
		top: 0.56rem;
		width: 0.38rem;
		height: 0.38rem;
	}
	/*地址列表为空css样式*/
	
	.add-address {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		border: 1px solid #dfdfdf;
	}
	
	.ads {
		font-size: 0.3rem;
		color: #3c3c3c;
	}
</style>