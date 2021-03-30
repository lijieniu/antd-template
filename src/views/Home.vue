<template>
	<div>
		<a-button type="primary" @click="doGetDataClickHandler">查询</a-button>
		<a-table :columns="columns" :data-source="data" />
	</div>	
</template>

<script>
const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age'
	}
];
export default {
	name: 'Home',
	data() {
		return {
			columns,
			data: []
		};
	},
	methods: {
		doGetDataClickHandler() {
			this.$axios.commonApi.getData().then(res => {
				this.data = res.data.list;
			});
		}
	}
};
</script>
