<template>
	<div>
		<!--{{$route.params.id}}-->
		<cgoods :product="goodslist"></cgoods>
	</div>
</template>
<script>
	import cgoods from './goods.vue'
	export default {
		data() {
				return {
					goodslist: [{
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					},{
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					},{
						names: "三脚架上骄傲是计算机",
						price: 123,
						pic: "//m.360buyimg.com/n12/jfs/t2731/207/4076727633/290641/b152c398/57a99710N11a65f65.jpg!q70.jpg"
					}]
				}
			},
			components: {
				cgoods
			}
	}
</script>