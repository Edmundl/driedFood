import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/app'
		},
		{
			path: '/app',
			component: resolve => require(['../components/container/app.vue'], resolve),
			meta: {
				title: '首页'
			}
    },
    {
			path: '/example',
      component: resolve => require(['../components/container/example.vue'], resolve),
      children: [
        {
          path: 'feedback',
          component: resolve => require(['../components/container/feedback.vue'], resolve)
        },
        {
          path: 'form',
          component: resolve => require(['../components/container/form.vue'], resolve)
        }
      ],
			meta: {
				title: '公用组件示例'
			}
    },
    {
			path: '/flexible',
			component: resolve => require(['../components/container/flexible.vue'], resolve),
			meta: {
				title: '适配示例'
			}
    }
	]
})