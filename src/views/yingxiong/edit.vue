<template>
	<div>
		<h2 class="sub-header">Add Hero</h2>
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">姓名</label>
				<input type="text" class="form-control" id="exampleInputEmail1" placeholder="姓名" v-model="name">
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">性别</label>
				<input type="text" class="form-control" id="exampleInputPassword1" placeholder="性别" v-model="gender">
			</div>
			<button type="submit" class="btn btn-success" @click="add">Submit</button>
		</form>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		// data()
		props: ['id'],
		data() {
			return {
				name: '',
				gender: ''
			}
		},
		mounted() {
			this.lodData()
		},
		methods: {
			lodData() {
				var numId = this.$route.params.id
				axios.
				get('http://localhost:3000/heroes/' + numId, {})
					.then((res) => {
						console.log(res.data)
						this.name = res.data.name
						this.gender = res.data.gender

					})
					.catch((err) => {

					})
			},
			add(i) {
				axios
					.put('http://localhost:3000/heroes/' + this.$route.params.id, {
						name: this.name,
						gender: this.gender,
					})
					.then((res) => {

						if (res.status == 200) {
							alert('修改成功')
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
