<template>
	<div>
		<h2 class="sub-header">英雄</h2>
		<router-link to="/yingxiong/add">
			<a class="btn btn-success">add</a>
		</router-link>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>姓名</th>
						<th>性别</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in list" :key="item.id" :data-id="item.id">
						<td>{{index+1}}</td>
						<td>{{item.name}}</td>
						<td>{{item.gender}}</td>
						<td>
							<router-link :to="'/yingxiong/edit/'+ item.id">
								edit
							</router-link>
							<a href="javascript:;" @click="delet(item.id)">delete</a>
						</td>
					</tr>
					<tr>
						<td colspan="4" v-if="list.length==0">暂无数据</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				list: []
			};
		},
		mounted() {
			this.loadData()
		},
		methods: {
			loadData() {
				console.log(this.list)
				axios
					.get('http://localhost:3000/heroes')
					.then((res) => {
						if (res.status == 200) {

							this.list = res.data
						}
					})
					.catch((err) => {
						console.log(err)
					})

			},
			delet(id) {
				if (confirm('你确定要删除吗?')) {


					axios
						.delete('http://localhost:3000/heroes/' + id)
						.then((res) => {
							console.log(res)
							if (res.status == 200) {
								alert('删除成功')
								this.loadData()
							}
						})
						.catch((err) => {
							console.log(err)
						})
				} else {
					alert('取消删除')
				}
			},
			edit(id) {


			}
		}
	}
</script>
<style>
</style>
