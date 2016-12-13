<template>
	<div class="p-order-con" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		<orderitem v-for="list in lists" :orderitem="list" v-on:enter="penter(list)" v-on:test="ptest(list)"></orderitem>
	</div>
</template>
<script>
	import orderitem from '../../components/orderItem.vue'
	export default {
		data() {
			return {
				loading: false,
				lists: [1, 2, 3]
			}
		}, methods: {
			loadMore: function() {

			},
			ptest: function(val) {
				alert('我是父' + val)
			},
			penter:function(val){
				alert('我是父' + val)
			}
		}, components: {
			orderitem
		}
	}
</script>