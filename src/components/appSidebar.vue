<template>
	<div class="col-sm-3 col-md-2 sidebar">
		<ul class="nav nav-sidebar">
		<!-- 	<li class="active"><a href="/yingxong">英雄 <span class="sr-only">(current)</span></a></li>
			<li><a href="/wuqi">武器</a></li>
			<li><a href="/zhuangbei">装备</a></li> -->
			 <router-link tag="li" to="/yingxiong">
			  <a>英雄管理</a>
			</router-link>
			<router-link tag="li" to="/wuqi">
			  <a>武器管理</a>
			</router-link>
			<router-link tag="li" to="/zhuangbei">
			  <a>装备管理</a>
			</router-link>
	
		</ul>
	</div>
</template>

<script>
</script>
<style>
</style>
