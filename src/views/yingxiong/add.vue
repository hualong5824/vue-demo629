<template>
	<div>
		<h2 class="sub-header">Add Hero</h2>
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">姓名</label>
				<input type="text" class="form-control" id="exampleInputEmail1" placeholder="姓名" v-model="name">
				{{name}}
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">性别</label>
				<input type="text" class="form-control" id="exampleInputPassword1" placeholder="性别" v-model="gender">
			</div>
			<button type="submit" class="btn btn-success" @click="add(2)">Submit</button>
		</form>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				name: '',
				gender: ''
			}
		},
		methods: {
			add(i) {
				axios
					.post('http://localhost:3000/heroes', {
						name: this.name,
						gender: this.gender,
					})
					.then((res) => {
						console.log(res);
						console.log(this.$router)
						if (res.status == 201) {
							alert('添加成功')
							this.$router.push('/yingxiong')
						}

					})
					.catch((err) => {
						console.log(err)
					})

			}
		}
	}
</script>
<style>
</style>
