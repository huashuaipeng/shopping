<template>	
 	<!--显示选择地区模块-->
 	<div class="citys p-abs">
 		<div class="city-content p-fix p-size">	
 			<div class="city-con-up">
 				<div class="city-up-top p-flex">
 					<p>所在地区</p>
 					<p @click='hide'> X </p>
 				</div>
 				<div class="city-up-bottom p-flex">
 					<p v-show='p1' @click='backP'> {{select1}} </p>
 					<p v-show='p2' @click='backS'> {{select2}} </p>
 					<p v-show='p3'> {{select3}} </p>
 				</div>
 			</div>
			<ul class="city-con-down">
				<li v-show='pro' v-for='(province,key) in provinces' @click='changeP(key)'> {{ province.name}} </li>
				<li v-show='tow' v-for='(town,key) in towns' @click='changeS(key)'> {{ town.name}} </li>
				<li v-show='con' v-for='(county,key) in countys' @click='changeQ(key)'> {{ county}} </li>
			</ul>
 		</div>
 	</div>
</template>
<script>
	export default{
		data(){
			return {
				provinces:[],
				towns:[],
				countys:[],
				pro:true,
				tow:false,
				con:false,
				select1:'请选择',
				select2:'请选择',
				select3:'请选择',
				p1:true,
				p2:false,
				p3:false
			}
		},
		created(){
			//请求地址json数据
			this.$http.get('/src/city.json').then(function(res){
				this.provinces = this.china = res.data.china;
			})	
		},
		methods:{
			changeP(key){
				//点击选择当前的省份后 当前省份li消失  省份下的市li 显示
				this.pro = false;
				this.tow = this.p2 = true;
				this.towns = this.china[key].city;
				this.select1 = this.china[key].name;	
			},
			changeS(key){
				//点击选择具体某个省份下的某个市区时  让省li  市li 消失   区li 显示
				this.pro = this.tow = false;
				this.con = this.p3 = true;
				this.countys = this.towns[key].area;
				this.select2 = this.towns[key].name;
			},
			changeQ(key){
				this.select3 = this.countys[key];
				this.$parent.$data.show = false; //顾客选择  省 市 区  三级后 直接隐藏    
				this.$parent.$data.value = this.select1 + this.select2 + this.select3; //input输入框中将三级值保留	
			},
			hide(){
				this.$parent.$data.show = false;  //点击  X 符号时  弹出页面隐藏
			},
			backP(){
				//省份li显示    市 与区li消失    select2恢复   p3消失
				this.pro = true;
				this.tow = this.con = this.p3 = false;
				this.select2 = '请选择';	
			},
			backS(){
				//市份li显示    省 与区li消失    select2恢复
				this.tow = true;
				this.pro = this.con = false;
				this.select3 = '请选择';	
			}
		}
	}
</script>
<style>
	.citys{
		left: 0;
		top: 0;
		width: 6.4rem;
		height: 100%;
		background: rgba(0,0,0,0.6);	
		z-index: 99;
	}
	.city-content  {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 6rem;
		padding: 0 .2rem;
		background: #fff;
	}
	.city-con-up {
		border-bottom: 1px solid #dfdfdf;	
	}
	.city-up-top {
		height: .9rem;
		line-height: .9rem;
		font-size: .3rem;
	}
	.city-up-top p:nth-of-type(1){
		width: 5.7rem;
		text-align: center;
	}
	.city-up-top p:nth-of-type(2){
		width: .3rem;
	}
	.city-up-bottom {
		height: .6rem;
		line-height: .6rem;
	}
	.city-up-bottom>p {
		height: .6rem;
		margin-right: .2rem;
		border-bottom: 2px solid #8fc241;
	}
	.city-con-down {
		width: 6.4rem;
		height: 4.5rem;	
		overflow-y: auto;
	}
	.city-con-down li {
		height: .6rem;
		line-height: .6rem;
	}
</style>
