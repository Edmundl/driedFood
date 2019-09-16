import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/example'
		},
    {
			path: '/example',
      component: () => import(
        /* webpackChunkName: "example" */
        '../components/container/example.vue'),
      children: [
        {
          path: 'feedback',
          component: () => import(
            /* webpackChunkName: "feedback" */
            /* webpackPrefetch: true */
           '../components/container/feedback.vue')
        },
        {
          path: 'form',
          component: () => import(
            /* webpackChunkName: "form" */
            /* webpackPrefetch: true */
           '../components/container/form.vue')
        }
      ],
			meta: {
				title: '公用组件示例'
			}
    }
	]
})