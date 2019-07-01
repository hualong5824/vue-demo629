<template>
  <div id="app">
		<!-- 头部 -->
<app-header></app-header>		
  <div class="container-fluid">
      <div class="row">
          <!-- 左侧导航 -->
					<add-sidebar></add-sidebar>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
		 </div>
           
			</div>
  </div>
  
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import addSidebar from './components/appSidebar.vue'
export default {
  name: 'App',
	components:{
		appHeader,
		addSidebar
		
	}
}
</script>

<style>

</style>
