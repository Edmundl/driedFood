import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/counterUpgrade'
		},
		{
			path: '/counterUpgrade',
			component: resolve => require(['../components/container/counterUpgrade.vue'], resolve),
			meta: {
				title: '柜台升舱'
			}
    },
    {
			path: '/protoRule',
			component: resolve => require(['../components/container/protoRule.vue'], resolve),
			meta: {
				title: '值机柜台升舱服务须知'
			}
    },
    {
			path: '/orderDetail',
			component: resolve => require(['../components/container/orderDetail.vue'], resolve),
			meta: {
				title: '订单详情'
			}
    },
    {
			path: '/success',
			component: resolve => require(['../components/container/success.vue'], resolve),
			meta: {
				title: '支付完成'
			}
    },
    {
			path: '/orderList',
			component: resolve => require(['../components/container/orderList.vue'], resolve),
			meta: {
				title: '四川航空订单'
			}
    }
	]
})