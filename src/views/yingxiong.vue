<template>
	<div>
		<h2 class="sub-header">英雄</h2>
		<a class="btn btn-success" href="add.html">Add</a>
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
							<a href="edit.html">edit</a> &nbsp;&nbsp;
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
				list: [
				]
			};
		},
		mounted() {
			this.loadData()
		},
		methods: {
			loadData() {
				console.log(this.list)
				axios
					.get('http://localhost:3002/heroes')
					.then((res)=>{
							if (res.status == 200) {
							console.log(this)
							this.list = res.data
						}
					})
					.catch((err)=>{
								console.log(err)
						})
					
			},
			delet(id){
				if(confirm('你确定要删除吗?')){
					
					
					axios
					.delete('http://localhost:3002/heroes/'+id)
					.then((res)=>{
						console.log(res)
						
						if(res.status==200){
							alert('删除成功')
							this.loadData()
						}
					})
					.catch((err)=>{
						console.log(err)
					})
				}else{
					alert('取消删除')
				}
			}
		}
	}
</script>
<style>
</style>
