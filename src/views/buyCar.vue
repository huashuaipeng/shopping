<template>
	<div>
		<navheader :navleft="'common'" :title="'购物车'" :navright="'product'"></navheader>
		<!--购物车-->
		<div class="carlist">
			<!--单个购物车-->
			<div class="carlist-item" v-for="product in products">
				<div class="p-flex">
					<div class="carlist-select">
						<input type="checkbox" class="p-check carcheck" v-model="product.selected" />
					</div>
					<div class="carlist-img p-align-justy">
						<img src="../assets/logo.png" />
					</div>
					<div class="carlist-content p-flex-1">
						<div class="carlist-name textellipsisone">
							210年新款大衣啊sasasas刷卡门口萨克斯我去我去
						</div>
						<div class="carlist-canshu">
							<span>颜色：红色；</span><span>颜色：红色；</span><span>颜色：红色；</span>
						</div>
						<div class="carlist-price">￥{{product.price}}</div>
					</div>
				</div>
				<div class="carlist-item-btn"><button class="p-btnjian" @click="jian(product)">-</button><input readonly class="p-input car-input" type="text" :value="product.num" /><button @click="jia(product)" class="p-btnjia">+</button> 小计：￥120
				</div>
				<div class="carlist-dete iconfont icon-laji"></div>
			</div>
		</div>
		<div class="p-bottom-btns" :class="{'car-home-bottom':$route.query.type}">
			<div class="p-flex p-btn-width">
				<div class="car-all">
					<input type="checkbox" class="p-check" id="carall" v-model="allSelect" />
					<label for="carall">全选</label>
				</div>
				<div class="car-total p-flex-1">
					<span>合计：</span>￥{{allSum}}
				</div>
				<router-link tag="div" to="/createOrder" class="car-btn">结算</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import navheader from '../components/navheader.vue'
	export default {
		data() {
				return {
					products: [{
						price: 120,
						selected: true,
						num: 1,
					}, {
						price: 130,
						selected: true,
						num: 1,
					}, {
						price: 150,
						selected: true,
						num: 1,
					}]
				}
			},
			computed: {
				//全选按钮设置
				allSelect: {
					get: function() {
						var products = this.products;
						for(var i = 0, len = products.length; i < len; i++) {
							if(!products[i].selected) {
								return false;
							}
						}
						return true;
					},
					set: function(val) {
						var products = this.products;
						for(var i = 0, len = products.length; i < len; i++) {
							products[i].selected = val
						}
					}
				},
				//价格设置
				allSum: function() {
					var toAmount = 0;
					var products = this.products;
					for(var i = 0, len = products.length; i < len; i++) {
						if(products[i].selected) {
							toAmount += products[i].price * products[i].num
						}
					}
					return toAmount
				}
			},
			methods: {
				jian: function(product) {
					if(product.num > 1) {
						product.num--;
					}
				},
				jia: function(product) {
					product.num++;
				}
			},
			components: {
				navheader
			}
	}
</script>
<style>
	.car-input {
		background: #F5F5F5;
		width: .6rem;
		margin: 0;
	}
	
	.carlist-select {
		margin-right: .12rem;
	}
	
	.carcheck {
		margin-top: .5rem;
	}
	
	.carlist-dete {
		position: absolute;
		right: .2rem;
		bottom: .4rem;
		width: .53rem;
		height: .53rem;
		color: #fff;
		text-align: center;
		line-height: .53rem;
		border-radius: 50%;
		-webkit-border-radius: 50%;
		background-color: #8FC241;
	}
	
	.car-all {
		position: relative;
		padding-left: .2rem;
		font-size: .22rem;
		color: #AAA9A9;
	}
	
	.car-total {
		text-align: center;
		font-size: .3rem;
	}
	
	.car-total span {
		font-size: .28rem;
	}
	
	.car-btn {
		background-color: #8FC241;
		color: #FFFFFF;
		width: 2.3rem;
		text-align: center;
	}
	.car-home-bottom{
		bottom: .98rem;
	}
</style>