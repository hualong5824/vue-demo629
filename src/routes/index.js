import Vue from 'vue'
import VueRouter from 'vue-router'
import yingxiong from '../views/yingxiong.vue'
import wuqi from '../views/wuqi.vue'
import zhuangbei from '../views/zhuangbei.vue'
Vue.use(VueRouter)
const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes: [

		{
			path: '/',
			redirect: '/yingxiong'
		},
		{
			path: '/yingxiong',
			component: yingxiong
		},
		{
			path: '/wuqi',
			component: wuqi
		},
		{
			path: '/zhuangbei',
			component: zhuangbei
		}
	]
})

// 导出此模块
export default router