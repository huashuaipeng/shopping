<template>
	<div class="addressList">
		<div class="header">
			<div class="nav">
				<span class="nav-left iconfont icon-houtui" @click="back"></span>
				<div class="header-title">我的地址</div>
				<span class="nav-right iconfont icon-icon" @click="add"></span>
			</div>
		</div>
		
		<div class="address-list p-size">
			<div class="address-list1 p-border p-rel" v-for='item in users'>
				<p> {{item.name}} </p>
				<p> {{item.phone}} </p>
				<p> {{item.address}} </p>
				<span  class="p-abs iconfont icon-icon07" @click='edit'></span>
			</div>
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
						"address": "北京市东城区新街口外大街22号"
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
<style>
	.address-list {
		margin: .2rem .2rem 0;
		color: #3c3c3c;
	}
	.address-list div {
		width: 6rem;
		padding-left: .2rem;
		border: 1px solid #dfdfdf;
	}
	.address-list div p {
		height: .5rem;
		line-height: .5rem;
	}
	.address-list1 {
		margin-bottom: .2rem;
	}
	.address-list1 span {
		right: .2rem;
		top: .58rem;
		width: .38rem;
		height: .38rem;	
		color: #8fc241;
	}
</style>