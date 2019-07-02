import Vue from 'vue'
import VueRouter from 'vue-router'
import yingxiong from '../views/yingxiong/yingxiong.vue'

import zhuangbei from '../views/zhuangbei/zhuangbei.vue'
import wuqi from '../views/wuqi/wuqi.vue'

import addIndex from '../views/yingxiong/add.vue'
import edit from '../views/yingxiong/edit.vue'
Vue.use(VueRouter)
const router = new VueRouter({
	linkActiveClass: 'active',
	routes: [

		{
			path: '/',
			redirect: '/yingxiong'
		},
		{
			path: '/yingxiong',
			component: yingxiong,
		},
		{
			path: '/wuqi',
			component: wuqi
		},
		{
			path: '/zhuangbei',
			component: zhuangbei
		},
		{
			path: '/yingxiong/add',
			component: addIndex
		},
		{
			path: '/yingxiong/edit/:id',
			component: edit,
			props:true
		}
	]
})

// 导出此模块
export default router
