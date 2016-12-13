<template>
	<!--个人中心-->
	<div class="personal">
		<div class="header">
			<div class="header-tit">个人中心</div>
		</div>	
		<div class="personal-info p-flex">
			<div class="user-pic">
				<img src="" alt=""/>
			</div>
			<ul class="p-size">
				<li>
					<span class="person-member iconfont icon-membershipcard"></span>
					<span> {{title}} </span>
				</li>
				<li>
					<span class="person-member iconfont icon-shouji"></span>
					<span> {{phone}} </span>
				</li>
			</ul>
		</div>
		<div class="personal-content">
			<ul>
				<router-link to="/ordermanage/orderall" tag="li" class="person-li p-flex">	
					<div class="per-dingdan per-icon"><span class="icons iconfont icon-icon1 p-border"></span></div>
					<div class=""><span class="icon iconf">我的订单</span></div>
					<div class=""><span class="icon iconf"> > </span></div>	
				</router-link>
				<router-link to="/card" tag="li" class="person-li p-flex">				
					<div class="per-kabao per-icon"><span class="icons iconfont icon-qiaquan p-border"></span></div>
					<div class=""><span class="icon iconf">卡卷包</span></div>
					<div class=""><span class="icon iconf"> > </span></div>
				</router-link>
				<router-link to="/addressList" tag="li" class="person-li p-flex">
					<div class="per-dizhi per-icon"><span class="icons iconfont icon-dvt-home p-border"></span></div>
					<div class=""><span class="icon iconf">收货地址</span></div>
					<div class=""><span class="icon iconf"> > </span></div>
				</router-link>
				<router-link to="" tag="li" class="person-li p-flex">
					<div class="per-xiaoxi per-icon"><span class="icons iconfont icon-xiaoxi p-border"></span></div>
					<div class=""><span class="icon iconf">我的消息</span></div>
					<div class=""><span class="icon iconf"> > </span></div>
				</router-link>
				<router-link to="" tag="li" class="person-li p-flex">
					<div class="per-yijian per-icon"><span class="icons iconfont icon-chexiao-copy p-border"></span></div>
					<div class=""><span class="icon iconf">意见反馈</span></div>
					<div class=""><span class="icon iconf"> > </span></div>
				</router-link>
				<router-link to="" tag="li" class="person-li p-flex">
					<div class="per-xiazai per-icon"><span class="icons iconfont icon-xiazai p-border"></span></div>
					<div class=""><span class="icon iconf">APP下载</span></div>
					<div class=""><span class="icon iconf"> > </span></div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				url: '../src/assets/logo.png',
				title: '金卡会员',
				phone: '135***3775'
			}
		},
		computed() {

		},
		methods: {}
	}
</script>
<style>
	.header-tit {
		line-height: .78rem;
		text-align: center;	
	}
	.personal {
		font-size: .28rem;
		color: #3c3c3c;	
	}
	.personal-info {
		height: 1.7rem;
		padding: 0 0.2rem;
		border-bottom: 1px solid #dfdfdf;	
	}
	.personal-info .user-pic {
		margin: .3rem 0;
		width: 1.4rem;
		line-height: 1.7rem;
	}
	.personal-info ul {
		margin: .3rem 0;
		width: 4.6rem;
		height: 1.1rem;
		color: #3c3c3c;
	}
	.user-pic img {
		width: 1.1rem;
		height: 1.1rem;
		border-radius :50%;
		-webkit-border-radius : 50%;
		overflow: hidden;
	}
	.personal-info li {	
		line-height: .55rem;
	}
	.person-member {
		margin-right: .1rem;
		color: #8fc241;
	}
	.personal-content .person-li {
		padding: 0 .2rem;
		height: .9rem;
		border-bottom: 1px solid #dfdfdf;	
	}
	.person-li div:nth-of-type(1){
		width: .92rem;
	}
	.person-li div:nth-of-type(2){
		line-height: .88rem;
		width: 4.8rem ;
	}
	.person-li div:nth-of-type(3){
		line-height: .88rem;
		width: 0.28rem;
		color: #7f7f7f;
	}
	.icons {
		width: .44rem;
		height: .44rem;
		margin: .22rem 0;
		text-align: center;
		color: #ffffff;
	}
	
	.icon-icon1 {
		background: #fba38f;
	}
	.icon-qiaquan {
		background: #fe9fc7;
	}
	.icon-dvt-home {
		background: #7fcdf3;
	}
	.icon-xiaoxi {
		background: #67dbaa;
	}
	.icon-chexiao-copy {
		background: #fea390;
	}
	.icon-xiazai {
		background: #fabf01;
	}
	.icon-icon1:before, .icon-qiaquan:before { 
		display: block;	
		padding: .04rem;
		width: .36rem;
		height: .36rem;
	}
</style>